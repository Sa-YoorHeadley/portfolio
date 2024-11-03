import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "https://sa-yoorheadley.github.io/portfolio/",
  plugins: [react()],
});
