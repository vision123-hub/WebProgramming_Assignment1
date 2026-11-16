# Week 11 — Portfolio Gallery

An editorial-style, responsive React portfolio for Vision Parajuli. The gallery
keeps six genuine screenshots from the existing Web Programming coursework.
Each project card lists its technology stack and links to the verified
coursework page and the existing GitHub repository. Use the technology filters
to browse projects by stack or select **All projects** to restore the full
gallery.

## Run locally

```bash
npm install
npm start
```

The development server opens at `http://localhost:3000`.

## Check and build

```bash
npm test -- --watchAll=false
npm run build
```

The production files are written to `build/`. The relative asset paths support
hosting the built app from this project’s subdirectory.
