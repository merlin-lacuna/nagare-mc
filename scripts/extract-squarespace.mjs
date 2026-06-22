// One-shot extractor: pulls items from the old Squarespace HTTrack mirror,
// copies images into public/, and writes one Markdown file per item into
// the `portfolio` Astro content collection.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");

const MIRROR_ROOT = "C:/My Web Sites/merlincarter_old";
const HTML_DIR = path.join(MIRROR_ROOT, "www.merlincarter.com");
const CDN_LOCAL_ROOT = path.join(MIRROR_ROOT, "images.squarespace-cdn.com");

const PUBLIC_IMG_DIR = path.join(PROJECT_ROOT, "public/images/portfolio");
const CONTENT_DIR = path.join(PROJECT_ROOT, "src/content/portfolio");

const CATEGORIES = [
  { file: "tutorials.html", category: "tutorial" },
  { file: "case-studies.html", category: "case-study" },
  { file: "comparisons.html", category: "comparison" },
  { file: "best-practices.html", category: "best-practice" },
  { file: "opinion-thought-leadership.html", category: "opinion" },
  { file: "ebooks.html", category: "ebook" },
];

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x27;/gi, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function stripTags(s) {
  return s.replace(/<[^>]+>/g, "").trim();
}

function collapseWhitespace(s) {
  return s.replace(/\s+/g, " ").trim();
}

function extractAddedOnMap(html) {
  // The Squarespace list section embeds a JSON blob in data-current-context
  // containing the structured userItems, each with image metadata including
  // addedOn (epoch ms). We use that as a proxy date for the entry.
  const map = new Map();
  const matches = [
    ...html.matchAll(/data-current-context="((?:[^"\\]|\\.)*)"/g),
  ];
  for (const m of matches) {
    const decoded = m[1]
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
    let obj;
    try {
      obj = JSON.parse(decoded);
    } catch {
      continue;
    }
    if (!obj.userItems || !obj.userItems.length) continue;
    for (const item of obj.userItems) {
      const url = item.image?.assetUrl;
      const addedOn =
        item.image?.addedOn || item.image?.publishOn || item.image?.updatedOn;
      if (url && addedOn) map.set(url, addedOn);
    }
  }
  return map;
}

function extractItems(html, category) {
  const addedOnByUrl = extractAddedOnMap(html);

  const blocks =
    html.match(
      /<li[^>]*class="[^"]*\blist-item\b[^"]*"[^>]*>[\s\S]*?<\/li>/g
    ) || [];

  const items = [];

  for (const block of blocks) {
    if (!block.includes("list-item-content__title")) continue;

    const titleMatch = block.match(
      /<h2[^>]*class="list-item-content__title"[^>]*>([\s\S]*?)<\/h2>/
    );
    if (!titleMatch) continue;

    const descMatch = block.match(
      /<div[^>]*class="list-item-content__description[^"]*"[\s\S]*?>\s*([\s\S]*?)<\/div>/
    );

    const linkMatch = block.match(
      /<a[^>]*class="[^"]*list-item-content__button[^"]*"[^>]*href="([^"]+)"/
    );

    const imgMatch = block.match(/<img[^>]*data-image="([^"]+)"[^>]*>/);
    const altMatch = imgMatch
      ? block.match(/<img[^>]*data-image="[^"]+"[^>]*alt="([^"]*)"/)
      : null;

    const title = collapseWhitespace(decodeEntities(stripTags(titleMatch[1])));
    const description = descMatch
      ? collapseWhitespace(decodeEntities(stripTags(descMatch[1])))
      : "";
    const link = linkMatch ? linkMatch[1] : undefined;
    const imageUrl = imgMatch ? imgMatch[1] : undefined;
    const imageAlt = altMatch && altMatch[1] ? decodeEntities(altMatch[1]) : title;

    const addedOnMs = imageUrl ? addedOnByUrl.get(imageUrl) : undefined;
    const date = addedOnMs
      ? new Date(addedOnMs).toISOString().slice(0, 10)
      : undefined;

    items.push({
      title,
      category,
      description,
      link,
      imageUrl,
      imageAlt,
      date,
    });
  }

  return items;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function localImagePath(cdnUrl) {
  // Map a CDN URL like:
  //   https://images.squarespace-cdn.com/content/v1/<acct>/<uuid>/<filename>
  // to the HTTrack mirror local path. URL-decode the path portion so a filename like
  // "65cb...Feature+image+-+Updating+vector+store-p-800.jpg" lands as the actual
  // characters on disk.
  const u = new URL(cdnUrl);
  const decoded = decodeURIComponent(u.pathname); // /content/v1/...
  return path.join(CDN_LOCAL_ROOT, decoded.replace(/^\//, ""));
}

function destImageRelPath(cdnUrl) {
  // Flatten the CDN path into a stable, unique-per-image local name:
  // <accountId>_<uuid>_<basename>
  const u = new URL(cdnUrl);
  const parts = u.pathname.split("/").filter(Boolean);
  // /content/v1/<acct>/<uuid>/<filename>   (or /content/<acct>/<uuid>/<filename>)
  const filename = decodeURIComponent(parts[parts.length - 1]);
  const uuid = parts[parts.length - 2] || "";
  const acct = parts[parts.length - 3] || "";
  const cleanBase = filename.replace(/[^A-Za-z0-9._-]+/g, "_");
  return `${acct.slice(-8)}_${uuid.slice(0, 8)}_${cleanBase}`;
}

function resolveLocalImage(cdnUrl) {
  const primary = localImagePath(cdnUrl);
  if (fs.existsSync(primary)) return primary;
  // HTTrack sometimes saved .jpeg as .jpg (and vice versa)
  const tries = [
    primary.replace(/\.jpeg$/i, ".jpg"),
    primary.replace(/\.jpg$/i, ".jpeg"),
    primary.replace(/\.png$/i, ".jpg"),
  ];
  for (const t of tries) {
    if (t !== primary && fs.existsSync(t)) return t;
  }
  return null;
}

function copyImage(cdnUrl) {
  if (!cdnUrl) return undefined;
  try {
    const src = resolveLocalImage(cdnUrl);
    if (!src) {
      console.warn(`  ! missing local image for ${cdnUrl}`);
      return undefined;
    }
    const destName = destImageRelPath(cdnUrl);
    const dest = path.join(PUBLIC_IMG_DIR, destName);
    if (!fs.existsSync(dest)) {
      fs.copyFileSync(src, dest);
    }
    return `/images/portfolio/${destName}`;
  } catch (err) {
    console.warn(`  ! could not copy image ${cdnUrl}: ${err.message}`);
    return undefined;
  }
}

function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function yamlString(s) {
  // Always quote to be safe with colons, special chars. Escape backslash and quote.
  return `"${String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function buildMarkdown(item) {
  const fm = [];
  fm.push(`title: ${yamlString(item.title)}`);
  if (item.category) fm.push(`category: ${item.category}`);
  if (item.date) fm.push(`date: ${item.date}`);
  if (item.link) fm.push(`projectUrl: ${yamlString(item.link)}`);
  if (item.imageSrc) fm.push(`imageSrc: ${yamlString(item.imageSrc)}`);
  if (item.imageAlt) fm.push(`imageAlt: ${yamlString(item.imageAlt)}`);
  return `---\n${fm.join("\n")}\n---\n\n${item.description || ""}\n`;
}

// --- main ---

ensureDir(PUBLIC_IMG_DIR);
ensureDir(CONTENT_DIR);

const allItems = [];
let totalImages = 0;
let missingImages = 0;

for (const { file, category } of CATEGORIES) {
  const fullPath = path.join(HTML_DIR, file);
  if (!fs.existsSync(fullPath)) {
    console.warn(`Skipping ${file} (not found)`);
    continue;
  }

  const html = fs.readFileSync(fullPath, "utf-8");
  const raw = extractItems(html, category);
  console.log(`${file}: ${raw.length} items`);

  for (const item of raw) {
    const localPath = copyImage(item.imageUrl);
    if (item.imageUrl && localPath) totalImages++;
    if (item.imageUrl && !localPath) missingImages++;
    allItems.push({
      title: item.title,
      category: item.category,
      description: item.description,
      link: item.link,
      imageSrc: localPath,
      imageAlt: item.imageAlt,
      date: item.date,
    });
  }
}

console.log(
  `\nExtracted ${allItems.length} items, ${totalImages} images copied, ${missingImages} missing.\n`
);

const usedSlugs = new Set();
function uniqueSlug(title, category) {
  let base = slugify(title) || slugify(category) || "entry";
  let candidate = base;
  let n = 2;
  while (usedSlugs.has(candidate)) {
    candidate = `${base}-${n++}`;
  }
  usedSlugs.add(candidate);
  return candidate;
}

let written = 0;
for (const item of allItems) {
  const slug = uniqueSlug(item.title, item.category);
  const outPath = path.join(CONTENT_DIR, `${slug}.md`);
  fs.writeFileSync(outPath, buildMarkdown(item), "utf-8");
  written++;
}

console.log(`Wrote ${written} markdown files to ${CONTENT_DIR}`);
