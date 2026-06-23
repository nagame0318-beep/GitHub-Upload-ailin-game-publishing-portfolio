# Upload guide

## GitHub website

1. Create a private repository named `ailin-game-publishing-portfolio`.
2. Do not initialize it with a README, `.gitignore`, or license.
3. Choose **Add file → Upload files**.
4. Open this folder and drag all of its contents into the upload area.
5. Commit to the `main` branch.

Upload the contents of this folder, not the ZIP file itself.

## Vercel

Import the GitHub repository with:

```text
Framework Preset: Vite
Root Directory: ./
Build Command: pnpm run build
Output Directory: dist
Install Command: pnpm install --frozen-lockfile
```

No environment variables are required.

After deployment:

```text
English: https://YOUR-PROJECT.vercel.app/
Chinese: https://YOUR-PROJECT.vercel.app/zh/
```
