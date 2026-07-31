# christopherparkramos.com

Personal portfolio and résumé site for Christopher Ramos, built with Next.js
and served two ways: a static export on GitHub Pages and a Vinext/Cloudflare
Sites build.

## Routes

- `/` — portfolio: four case studies from a decade in reporting, e-commerce,
  and creative systems, plus the v1984 coda
- `/resume` — printable résumé with a compact print stylesheet

## Stack

- Next.js (App Router, static export for GitHub Pages)
- Vinext + Vite + Cloudflare Worker (Sites build target)
- Tailwind CSS via PostCSS (`@tailwindcss/postcss`)
- TypeScript, ESLint (`eslint-config-next`)
- No database or server-side data; content lives in `app/page.tsx` and
  `app/resume/page.tsx`

## Commands

```bash
npm install
npm run dev        # local development (Vinext + Wrangler)
npm run build      # Vinext/Cloudflare Sites build -> dist/
npm run build:pages  # Next.js static export -> out/
npm test           # build + rendered-HTML assertions for both routes
npm run lint
```

## Deployment

- **GitHub Pages**: `.github/workflows/deploy-pages.yml` runs
  `npm run build:pages` and publishes `out/` on every push to `main`. The
  custom domain `christopherparkramos.com` is declared in `public/CNAME`.
- **Sites**: `.openai/hosting.json` describes the hosting configuration for the
  Vinext/Cloudflare build target. `vite.config.ts` wires up the worker
  (`worker/index.ts`) and local bindings; `build/sites-vite-plugin.ts` packages
  the hosting metadata into `dist/.openai/`.
