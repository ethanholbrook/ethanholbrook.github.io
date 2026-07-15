// Post-build step: Parcel only emits assets referenced from the HTML, so it
// skips root-level files like robots.txt, sitemap.xml, the icons, the web
// manifest, and the Google Search Console verification file. Copy everything
// in static/ into dist/, then duplicate the built index.html as 404.html so
// GitHub Pages serves the single-page app for deep links instead of a 404.
import { cpSync, copyFileSync, existsSync } from "node:fs";

const STATIC_DIR = "static";
const DIST_DIR = "dist";

if (!existsSync(DIST_DIR)) {
  console.error(`"${DIST_DIR}" not found — run the Parcel build first.`);
  process.exit(1);
}

cpSync(STATIC_DIR, DIST_DIR, { recursive: true });
console.log(`Copied ${STATIC_DIR}/ → ${DIST_DIR}/`);

copyFileSync(`${DIST_DIR}/index.html`, `${DIST_DIR}/404.html`);
console.log(`Wrote ${DIST_DIR}/404.html (SPA fallback)`);
