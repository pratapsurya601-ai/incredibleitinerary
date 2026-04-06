import sharp from 'sharp';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const SURYA_FOLDER = 'C:/Users/vinit/OneDrive/Pictures/SURYA_EXTRACTED/SURYA';
const NEW_FOLDER   = 'C:/Users/vinit/OneDrive/Pictures/NEW_EXTRACTED/New folder';
const OUT_FOLDER   = 'C:/Users/vinit/Downloads/incredibleitinerary-FINAL2/incredibleitinerary/public/images/surya';

// ─── PHOTO MANIFEST ──────────────────────────────────────────────────────────
// rotation: degrees clockwise to fix orientation
// width: output width (height auto)
// quality: jpeg quality 1-100
const PHOTOS = [

  // ── AUTHOR / PROFILE ──────────────────────────────────────────────────────
  {
    src: `${NEW_FOLDER}/20260328_105056.jpg`,
    out: 'surya-author-primary.jpg',
    rotation: 90,        // sideways
    width: 600,
    quality: 88,
    label: 'Author photo — Delhi cafe Mar 2026 (BEST)',
  },
  {
    src: `${SURYA_FOLDER}/IMG20230209153541.jpg`,
    out: 'surya-author-jaipur.jpg',
    rotation: 0,
    width: 600,
    quality: 88,
    label: 'Author photo — Jaipur Feb 2023',
  },
  {
    src: `${NEW_FOLDER}/20260328_093602.jpg`,
    out: 'surya-author-delhi-fullbody.jpg',
    rotation: 0,
    width: 800,
    quality: 85,
    label: 'Full body — Rashtrapati Bhavan Mar 2026',
  },

  // ── ABOUT PAGE STORY PHOTOS ───────────────────────────────────────────────
  {
    src: `${SURYA_FOLDER}/IMG20221025163529.jpg`,
    out: 'surya-kedarnath-ridge.jpg',
    rotation: 0,
    width: 900,
    quality: 85,
    label: 'Surya at Kedarnath ridge Oct 2022',
  },
  {
    src: `${SURYA_FOLDER}/20230615_123242.jpg`,
    out: 'surya-gangotri-glacier.jpg',
    rotation: 0,
    width: 900,
    quality: 85,
    label: 'Surya at Gangotri glacier Jun 2023',
  },
  {
    src: `${NEW_FOLDER}/20231228_134038.jpg`,
    out: 'surya-manali-snowsuit.jpg',
    rotation: 90,        // sideways
    width: 900,
    quality: 85,
    label: 'Surya in blue snowsuit Manali Dec 2023',
  },

  // ── LINKEDIN BANNER ───────────────────────────────────────────────────────
  {
    src: `${SURYA_FOLDER}/IMG20221025164215.jpg`,
    out: 'surya-linkedin-banner-raw.jpg',
    rotation: 0,
    width: 1584,         // LinkedIn banner width
    quality: 90,
    label: 'LinkedIn banner — back to camera, snow peaks',
  },

  // ── BLOG HERO IMAGES ──────────────────────────────────────────────────────
  {
    src: `${SURYA_FOLDER}/IMG20221025144424.jpg`,
    out: 'blog-kedarnath-temple.jpg',
    rotation: 0,
    width: 1400,
    quality: 85,
    label: 'Kedarnath temple hero — Oct 2022',
  },
  {
    src: `${SURYA_FOLDER}/20230614_155424.jpg`,
    out: 'blog-gangotri-valley.jpg',
    rotation: 0,
    width: 1400,
    quality: 85,
    label: 'Gangotri valley hero — Jun 2023',
  },
  {
    src: `${NEW_FOLDER}/20231229_142418.jpg`,
    out: 'blog-manali-valley.jpg',
    rotation: 0,
    width: 1400,
    quality: 85,
    label: 'Manali valley snow peaks — Dec 2023',
  },
  {
    src: `${NEW_FOLDER}/20250104_161113.jpg`,
    out: 'blog-shimla-building.jpg',
    rotation: 0,
    width: 1400,
    quality: 85,
    label: 'Shimla colonial building — Jan 2025',
  },
  {
    src: `${SURYA_FOLDER}/IMG20221019211148.jpg`,
    out: 'blog-badrinath-night.jpg',
    rotation: 0,
    width: 1400,
    quality: 85,
    label: 'Badrinath temple at night — Oct 2022',
  },
  {
    src: `${NEW_FOLDER}/20260328_131421.jpg`,
    out: 'blog-delhi-garden.jpg',
    rotation: 0,
    width: 1400,
    quality: 85,
    label: 'Amrit Udyan Delhi — Mar 2026',
  },
  {
    src: `${SURYA_FOLDER}/20210130_172208.jpg`,
    out: 'blog-shimla-sunrise-clouds.jpg',
    rotation: 0,
    width: 1400,
    quality: 85,
    label: 'Sunrise above clouds Shimla — Jan 2021',
  },
];

// ─── PROCESS ─────────────────────────────────────────────────────────────────
let passed = 0, failed = 0;

for (const photo of PHOTOS) {
  const outPath = join(OUT_FOLDER, photo.out);
  try {
    let pipeline = sharp(photo.src).withMetadata();

    // Rotate if needed
    if (photo.rotation !== 0) {
      pipeline = pipeline.rotate(photo.rotation);
    } else {
      // Auto-rotate based on EXIF orientation
      pipeline = pipeline.rotate();
    }

    // Resize (preserve aspect ratio)
    pipeline = pipeline.resize({ width: photo.width, withoutEnlargement: true });

    // Output as JPEG
    await pipeline
      .jpeg({ quality: photo.quality, progressive: true })
      .toFile(outPath);

    const { width, height, size } = await sharp(outPath).metadata();
    const kb = Math.round((await import('fs')).statSync(outPath).size / 1024);
    console.log(`✅  ${photo.out}  ${width}×${height}  ${kb}KB  — ${photo.label}`);
    passed++;
  } catch (err) {
    console.error(`❌  ${photo.out}  FAILED: ${err.message}  — ${photo.label}`);
    failed++;
  }
}

console.log(`\n─────────────────────────────────`);
console.log(`✅ ${passed} processed   ❌ ${failed} failed`);
console.log(`Output → ${OUT_FOLDER}`);
