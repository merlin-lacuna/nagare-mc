// One-shot extractor: pulls items from the old Squarespace HTTrack mirror,
// copies images into public/, and writes src/data/projectsData.ts.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");

const MIRROR_ROOT = "C:/My Web Sites/merlincarter_old";
const HTML_DIR = path.join(MIRROR_ROOT, "www.merlincarter.com");
const CDN_LOCAL_ROOT = path.join(MIRROR_ROOT, "images.squarespace-cdn.com");

const PUBLIC_IMG_DIR = path.join(PROJECT_ROOT, "public/images/portfolio");
const DATA_OUT = path.join(PROJECT_ROOT, "src/data/projectsData.ts");

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

function extractItems(html, category) {
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

    items.push({
      title,
      category,
      description,
      link,
      imageUrl,
      imageAlt,
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

function tsString(s) {
  if (s === undefined || s === null) return "undefined";
  // Use a double-quoted string with escapes.
  const escaped = s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
  return `"${escaped}"`;
}

function renderItem(item) {
  const parts = [];
  parts.push(`    title: ${tsString(item.title)}`);
  parts.push(`    category: ${tsString(item.category)}`);
  if (item.imageSrc) parts.push(`    imageSrc: ${tsString(item.imageSrc)}`);
  if (item.imageAlt) parts.push(`    imageAlt: ${tsString(item.imageAlt)}`);
  if (item.link) parts.push(`    projectUrl: ${tsString(item.link)}`);
  if (item.description) {
    parts.push(`    description: ${tsString(`<p>${item.description}</p>`)}`);
  } else {
    parts.push(`    description: ${tsString("")}`);
  }
  return `  {\n${parts.join(",\n")},\n  }`;
}

function buildDataFile(allItems) {
  const header = `// src/data/projectsData.ts
// Auto-generated by scripts/extract-squarespace.mjs.
// Hand-edit freely; just don't blow it away on the next regen if you've made changes.

export type ProjectCategory =
  | "tutorial"
  | "case-study"
  | "comparison"
  | "best-practice"
  | "opinion"
  | "ebook";

export interface ProjectDataItem {
  title: string;
  category?: ProjectCategory;
  timeframe?: string;
  githubUrl?: string;
  githubRepos?: { title?: string; url: string }[];
  projectUrl?: string;
  techStack?: string[];
  imageSrc?: string;
  imageAlt?: string;
  thumbnailSrc?: string;
  description: string;
  homepageSummary?: string;
  isFeatured?: boolean;
}

export const allProjectsData: ProjectDataItem[] = [
`;

  const body = allItems.map(renderItem).join(",\n");

  const footer = `,
];

export function projectsByCategory(category: ProjectCategory): ProjectDataItem[] {
  return allProjectsData.filter((p) => p.category === category);
}
`;

  return header + body + footer;
}

// --- main ---

ensureDir(PUBLIC_IMG_DIR);

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
    });
  }
}

console.log(
  `\nExtracted ${allItems.length} items, ${totalImages} images copied, ${missingImages} missing.\n`
);

const tsOut = buildDataFile(allItems);
fs.writeFileSync(DATA_OUT, tsOut, "utf-8");
console.log(`Wrote ${DATA_OUT}`);
