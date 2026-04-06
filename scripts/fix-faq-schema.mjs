/**
 * fix-faq-schema.mjs
 *
 * Problem: 88 blog page.tsx files have FAQPage inside @graph alongside Article.
 * Google's parser sees FAQPage twice = "Duplicate field 'FAQPage'" = invalid rich results.
 *
 * Fix per Google guidelines:
 *   - Remove FAQPage from @graph
 *   - Render it as a SEPARATE standalone <script type="application/ld+json"> block
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, "../src/app/blog");

let fixed = 0;
let skipped = 0;
const errors = [];

const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name !== "[slug]")
  .map(d => path.join(BLOG_DIR, d.name, "page.tsx"))
  .filter(f => fs.existsSync(f));

for (const filePath of entries) {
  const src = fs.readFileSync(filePath, "utf8");

  // Only process files that have FAQPage inside @graph
  if (!src.includes('"@type": "FAQPage"') && !src.includes("'@type': 'FAQPage'")) {
    skipped++;
    continue;
  }

  // Skip if already fixed (has separate faqLd const)
  if (src.includes("const faqLd")) {
    skipped++;
    continue;
  }

  // ── Step 1: Extract the FAQPage block from within @graph ─────────────────
  // Find the start of the FAQPage object inside @graph
  const faqStartMarker = src.indexOf('"@type": "FAQPage"');
  if (faqStartMarker === -1) { skipped++; continue; }

  // Find the opening { of this FAQPage object (search backwards from "@type")
  let faqObjStart = faqStartMarker;
  while (faqObjStart > 0 && src[faqObjStart] !== '{') faqObjStart--;

  // Find the matching closing } by counting braces
  let depth = 0;
  let faqObjEnd = faqObjStart;
  for (let i = faqObjStart; i < src.length; i++) {
    if (src[i] === '{') depth++;
    if (src[i] === '}') { depth--; if (depth === 0) { faqObjEnd = i; break; } }
  }

  if (faqObjEnd <= faqObjStart) {
    errors.push(`${filePath}: could not find FAQPage block end`);
    skipped++;
    continue;
  }

  const faqBlock = src.slice(faqObjStart, faqObjEnd + 1);

  // ── Step 2: Remove FAQPage block (+ surrounding comma/whitespace) from @graph
  // Remove trailing comma after block or leading comma before block
  let removal = src;

  // Try to remove ", \n    { FAQPage block },"  or "{ FAQPage block },"
  // Find the FAQPage block in context and remove it plus its comma
  const beforeFaq = src.slice(0, faqObjStart);
  const afterFaq = src.slice(faqObjEnd + 1);

  // Remove trailing comma + newline after the block
  const trailingCommaMatch = afterFaq.match(/^,?\s*\n/);
  const trailingLen = trailingCommaMatch ? trailingCommaMatch[0].length : 0;

  // Remove leading newline + spaces before the block (the comment line too if present)
  const commentLineMatch = beforeFaq.match(/\n\s*\/\/[^\n]*\n\s*$/);
  const leadingLen = commentLineMatch ? commentLineMatch[0].length : 0;

  const cleanedSrc =
    beforeFaq.slice(0, beforeFaq.length - leadingLen) +
    afterFaq.slice(trailingLen);

  if (cleanedSrc === src) {
    errors.push(`${filePath}: removal produced no change`);
    skipped++;
    continue;
  }

  // ── Step 3: Build the standalone faqLd const ─────────────────────────────
  const faqLdConst = `
// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  ${faqBlock.slice(1, faqBlock.length - 1).trimEnd()}
};
`;

  // ── Step 4: Insert faqLd const just before the export default function ────
  const exportIdx = cleanedSrc.indexOf("export default function");
  if (exportIdx === -1) {
    errors.push(`${filePath}: could not find export default`);
    skipped++;
    continue;
  }

  let withFaqConst = cleanedSrc.slice(0, exportIdx) + faqLdConst + "\n" + cleanedSrc.slice(exportIdx);

  // ── Step 5: Add second <script> tag for faqLd inside the JSX return ───────
  // Find the existing jsonLd script tag
  const scriptTag = `dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}`;
  const scriptIdx = withFaqConst.indexOf(scriptTag);
  if (scriptIdx === -1) {
    errors.push(`${filePath}: could not find jsonLd script tag`);
    skipped++;
    continue;
  }

  // Find the closing /> of that script tag
  const closingIdx = withFaqConst.indexOf("/>", scriptIdx);
  if (closingIdx === -1) {
    errors.push(`${filePath}: could not find script closing />`);
    skipped++;
    continue;
  }

  const faqScriptTag = `
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />`;

  const finalSrc =
    withFaqConst.slice(0, closingIdx + 2) +
    faqScriptTag +
    withFaqConst.slice(closingIdx + 2);

  fs.writeFileSync(filePath, finalSrc, "utf8");
  fixed++;
}

console.log(`\n${"=".repeat(50)}`);
console.log(`DONE: ${fixed} fixed, ${skipped} skipped`);
if (errors.length) {
  console.log(`\nERRORS (${errors.length}):`);
  errors.forEach(e => console.log(" ❌", e));
}
console.log("=".repeat(50));
