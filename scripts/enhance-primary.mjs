import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "../public/images/surya/surya-author-primary.jpg");
const OUT = path.join(__dirname, "../public/images/surya/surya-author-primary.jpg");
const PREVIEW = path.join(__dirname, "../public/images/surya/surya-author-primary-preview.jpg");

// First check metadata
const meta = await sharp(SRC).metadata();
console.log("Input:", meta.width, "x", meta.height, "orientation:", meta.orientation);

// Enhanced version
await sharp(SRC)
  .rotate()                          // auto EXIF fix
  .rotate(-3)                        // straighten the selfie tilt
  .resize(600, 800, {
    fit: "cover",
    position: "top"                  // keep face in frame
  })
  // Boost contrast
  .linear(1.18, -15)                 // contrast boost
  // Increase vibrance/saturation — keep colour
  .modulate({
    brightness: 1.06,
    saturation: 1.35,
  })
  // Sharpen the face
  .sharpen({ sigma: 1.0, m1: 0.8, m2: 0.3 })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(PREVIEW);

// Now overwrite the main file
await sharp(SRC)
  .rotate()
  .rotate(-3)
  .resize(600, 800, { fit: "cover", position: "top" })
  .linear(1.18, -15)
  .modulate({ brightness: 1.06, saturation: 1.35 })
  .sharpen({ sigma: 1.0, m1: 0.8, m2: 0.3 })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(OUT + ".tmp.jpg");

import { renameSync } from "fs";
renameSync(OUT + ".tmp.jpg", OUT);

console.log("✅ surya-author-primary.jpg updated successfully!");
