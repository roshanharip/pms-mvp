import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'node:path';
const host = process.env.TAURI_DEV_HOST;

export default defineConfig(async () => ({
  plugins: [
      react(),
      tailwindcss(),
      tsconfigPaths(),
  ],
    resolve: {  // Add this
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      ignored: ["**/src-tauri/**"],
    },
  },
}));
