// Image pipeline: turns the large PNG originals in attached_assets/ into
// web-ready WebP at two widths under client/public/images/. Run manually
// after adding or replacing source images:
//
//   node script/optimize-images.mjs
//
// Outputs are committed (small) so the Netlify build stays fast and
// deterministic. Heroes: 1920 + 1280 wide. Portraits: 800 wide.

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
    await writeWebp(input, path.join(OUT, "hero", name), [1920, 1280]);
  }

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
