# Ailin Li — Tencent Game Publishing / Operations Role-Tailored Portfolio

Bilingual responsive portfolio tailored to Tencent's Game Publishing / Operations Management Trainee role.

## Live routes

- English: `/`
- Simplified Chinese: `/zh/`

## Local development

```powershell
pnpm install
pnpm run dev
```

## Production build

```powershell
pnpm run build
```

The deployable static site is generated under `dist/`.

## Vercel

Import this repository into Vercel with:

```text
Framework Preset: Vite
Build Command: pnpm run build
Output Directory: dist
Install Command: pnpm install --frozen-lockfile
```

No environment variables are required.

## Main content locations

- `src/App.jsx`: bilingual copy, timeline, projects and interactions.
- `src/styles.css`: layout, responsive rules and visual tokens.
- `public/assets/`: supplied project photography, logos and video covers.
- `public/*Tencent-Game-Publishing-Operations-Resume.txt`: downloadable role-targeted resumes.

## External embeds and links

- RO3 first gameplay reveal: YouTube embed loaded after clicking its cover.
- Final Fantasy XIV Black Mage guide: Bilibili embed loaded after clicking its cover.
- ROOC football campaign: links to the live H5 supplied by the portfolio owner.

## Visual direction

The signature module is the global launch timeline. The visual system uses off-black and warm-white surfaces, acid-lime accents, oversized condensed typography, technical rules and sharp project imagery.
