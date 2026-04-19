import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: site proje alt yolunda yayınlanır (https://<user>.github.io/<repo>/).
// BASE_PATH ortam değişkeni CI tarafından "/dokunsay-geo/" olarak geçilir; lokalde "/" kullanılır.
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 900,
  },
});
