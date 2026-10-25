import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // github pages puts the site under /authorization-form/, so assets need this prefix
  base: "/authorization-form/",
});
