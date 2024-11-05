import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Prime-Tecnologia",
  assetsInclude: ["**/*.glb"], // Isso diz ao Vite para tratar arquivos .glb como assets
});
