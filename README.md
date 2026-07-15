# ethanholbrook.github.io

My personal website — live at **[ethanholbrook.github.io](https://ethanholbrook.github.io)**.

A single-page personal site featuring my resume, CV, and photography. Built
with React, bundled with [Parcel](https://parceljs.org/), and hosted on GitHub
Pages.

## Development

```bash
npm install     # install dependencies
npm start       # run locally at http://localhost:1234
npm run build   # production build into dist/
npm run deploy  # build and publish dist/ to the gh-pages branch
```

The `build` step also copies everything in `static/` (icons, `robots.txt`,
`sitemap.xml`, `site.webmanifest`, and the search-console verification file)
into `dist/`, and generates a `404.html` fallback so deep links resolve to the
single-page app.
