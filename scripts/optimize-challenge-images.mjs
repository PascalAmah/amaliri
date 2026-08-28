/**
 * optimize-challenge-images.mjs
 *
 * Reads every image from public/30days/ (recursively),
 * converts each to WebP at 1200px wide, quality 82,
 * and writes the result to public/30days-opt/<DayN>/<filename>.webp
 *
 * Run once:  node scripts/optimize-challenge-images.mjs
 * Originals in public/30days/ are never modified.
 */

import sharp from 'sharp';
import { existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, relative, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const srcDir = join(root, 'public', '30days');
const outDir = join(root, 'public', '30days-opt');

const SUPPORTED = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp']);
const WIDTH = 1200;
const QUALITY = 82;

function walk(dir) {
  const results = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      results.push(...walk(full));
    } else if (SUPPORTED.has(extname(name).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

const files = walk(srcDir);
console.log(`Found ${files.length} images — converting to WebP ${WIDTH}px @ q${QUALITY}...\n`);

let saved = 0;
let totalOriginal = 0;
let totalOptimized = 0;

for (const file of files) {
  const rel = relative(srcDir, file);                      // e.g. Day1/day1.jpg
  const outName = basename(file, extname(file)) + '.webp'; // day1.webp
  const outSubdir = join(outDir, dirname(rel));             // public/30days-opt/Day1
  const outFile = join(outSubdir, outName);

  mkdirSync(outSubdir, { recursive: true });

  try {
    const { size: origSize } = statSync(file);
    await sharp(file)
      .resize({ width: WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outFile);

    const { size: optSize } = statSync(outFile);
    const pct = Math.round((1 - optSize / origSize) * 100);
    totalOriginal += origSize;
    totalOptimized += optSize;

    console.log(
      `  ✓  ${rel.padEnd(48)} ${fmt(origSize)} → ${fmt(optSize)}  (${pct}% smaller)`
    );
    saved++;
  } catch (err) {
    console.error(`  ✗  ${rel} — ${err.message}`);
  }
}

function fmt(bytes) {
  return bytes > 1_000_000
    ? (bytes / 1_000_000).toFixed(1) + ' MB'
    : Math.round(bytes / 1024) + ' KB';
}

console.log(`
Done — ${saved}/${files.length} images optimized.
Original total : ${fmt(totalOriginal)}
Optimized total: ${fmt(totalOptimized)}
Total saved    : ${fmt(totalOriginal - totalOptimized)} (${Math.round((1 - totalOptimized / totalOriginal) * 100)}% reduction)
`);
