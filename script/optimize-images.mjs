// Image pipeline: turns the large PNG originals in attached_assets/ into
// web-ready WebP under client/public/images/. Run manually
// after adding or replacing source images:
//
//   node script/optimize-images.mjs
//
// Outputs are committed (small) so the Netlify build stays fast and
// deterministic. Heroes: 1920, 1280 and 828 wide (828 = phone at 2x). Portraits: 800 wide.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "attached_assets");
const OUT = path.join(ROOT, "client", "public", "images");

/** source file (relative to attached_assets) → output basename */
// Illustrative AI-generated visuals used as backdrops (never as patient
// results). Not included: the "before/after" collages, which Google Ads and
// DHA advertising rules treat as treatment-result claims — add only if the
// owner explicitly decides to.
const HEROES = {
  "generated_images/dental_clinic_hero_smile.png": "hero-clinic-smile",
  "generated_images/dental_implants_hero.png": "hero-implants",
  "generated_images/crowns_bridges_hero.png": "hero-crowns",
  "generated_images/dentist_showing_a_treatment_plan_to_a_smiling_patient.png": "visual-treatment-plan",
  "generated_images/happy_patient_shaking_hands_with_dentist_in_modern_clinic.png": "visual-handshake",
  "generated_images/dental_team_hero.png": "hero-team",
  "generated_images/luxury_dental_clinic_reception_area_with_modern_lighting_and_gold_accents.png": "visual-reception",
};

const PORTRAITS_DIR = "doctors";

async function writeWebp(input, outBase, widths, quality = 78) {
  const meta = await sharp(input).metadata();
  for (const w of widths) {
    const width = Math.min(w, meta.width ?? w);
    const out = `${outBase}-${w}.webp`;
    await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality }).toFile(out);
    const kb = (fs.statSync(out).size / 1024).toFixed(0);
    console.log(`  ${path.relative(ROOT, out)}  ${kb} KB`);
  }
}

// Brand assets referenced by SEO tags and JSON-LD, derived from the logo
// file until the owner sends the English version. The logo's bottom line
// ("Stomatološka ordinacija") is Serbian, so only the "YOUR SMILE" wordmark
// above the divider is used; the icons use the blue tooth on its own.
const LOGO = "logo_1764501679029.png";
const LOGO_WORDMARK_BOTTOM = 770; // px row of the divider line in the source
const TOOTH_BOX = { left: 1101, top: 55, width: 594, height: 700 };
const OG_HERO = "generated_images/dental_clinic_hero_smile.png";
const PUBLIC = path.join(ROOT, "client", "public");
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

/** The tooth mark alone: keep only the blue pixels inside its box. */
async function toothMark() {
  const { data, info } = await sharp(path.join(SRC, LOGO))
    .extract(TOOTH_BOX)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const [r, , b] = [data[i], data[i + 1], data[i + 2]];
    if (!(b > 150 && b - r > 60)) data[i + 3] = 0;
  }
  return sharp(data, { raw: info }).png().toBuffer();
}

async function squareIcon(mark, size, out) {
  const inner = Math.round(size * 0.78);
  const resized = await sharp(mark).resize({ width: inner, height: inner, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: WHITE } })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toFile(out);
  console.log(`  ${path.relative(ROOT, out)}`);
}

async function writeBrandAssets() {
  const logoSrc = path.join(SRC, LOGO);
  const meta = await sharp(logoSrc).metadata();
  // Two pipelines: sharp runs trim() before extract() within one.
  const top = await sharp(logoSrc)
    .extract({ left: 0, top: 0, width: meta.width, height: LOGO_WORDMARK_BOTTOM })
    .png()
    .toBuffer();
  const wordmark = await sharp(top).trim().png().toBuffer();

  // JSON-LD Organization logo (Google: ≥112px, readable on white).
  const logoOut = path.join(PUBLIC, "logo.png");
  await sharp(wordmark)
    .resize({ width: 560 })
    .extend({ top: 20, bottom: 20, left: 20, right: 20, background: WHITE })
    .flatten({ background: WHITE })
    .png()
    .toFile(logoOut);
  console.log(`  ${path.relative(ROOT, logoOut)}`);

  // Header logo: the full file as-is, sized for a 56px-tall slot at 3x.
  const headerOut = path.join(OUT, "logo-header.webp");
  await sharp(logoSrc).resize({ height: 168 }).webp({ quality: 90 }).toFile(headerOut);
  console.log(`  ${path.relative(ROOT, headerOut)}`);

  // Favicon (Google Search wants a square multiple of 48px) + iOS icon.
  const mark = await toothMark();
  await squareIcon(mark, 192, path.join(PUBLIC, "favicon.png"));
  await squareIcon(mark, 180, path.join(PUBLIC, "apple-touch-icon.png"));

  // Social share card, 1200×630: hero photo with the wordmark on a white
  // plate over the skyline side.
  const plate = await sharp(wordmark)
    .resize({ width: 380 })
    .extend({ top: 28, bottom: 28, left: 36, right: 36, background: WHITE })
    .flatten({ background: WHITE })
    .toBuffer();
  const plateMeta = await sharp(plate).metadata();
  const ogOut = path.join(PUBLIC, "og-image.jpg");
  await sharp(path.join(SRC, OG_HERO))
    .resize({ width: 1200, height: 630, fit: "cover", position: "left" })
    .composite([{ input: plate, top: 630 - plateMeta.height - 40, left: 1200 - plateMeta.width - 40 }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(ogOut);
  console.log(`  ${path.relative(ROOT, ogOut)}`);
}

async function main() {
  fs.mkdirSync(path.join(OUT, "hero"), { recursive: true });
  fs.mkdirSync(path.join(OUT, "doctors"), { recursive: true });

  console.log("[images] heroes");
  for (const [rel, name] of Object.entries(HEROES)) {
    const input = path.join(SRC, rel);
    if (!fs.existsSync(input)) {
      console.warn(`  skip (missing): ${rel}`);
      continue;
    }
    await writeWebp(input, path.join(OUT, "hero", name), [1920, 1280, 828]);
  }

  console.log("[images] brand");
  await writeBrandAssets();

  console.log("[images] doctor portraits");
  const dir = path.join(SRC, PORTRAITS_DIR);
  for (const f of fs.readdirSync(dir)) {
    if (!/\.(png|jpe?g|webp)$/i.test(f)) continue;
    const base = f.replace(/\.[^.]+$/, "");
    await writeWebp(path.join(dir, f), path.join(OUT, "doctors", base), [800], 82);
  }
  console.log("[images] done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
