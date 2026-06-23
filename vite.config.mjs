import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        en: resolve(import.meta.dirname, "index.html"),
        zh: resolve(import.meta.dirname, "zh/index.html"),
      },
    },
  },
});
