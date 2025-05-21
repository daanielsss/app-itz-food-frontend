import path from "path";
import fs from "fs";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "myfoodapp-privateKey.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "myfoodapp.crt")),
    },
    port: 5173,
  },
});
