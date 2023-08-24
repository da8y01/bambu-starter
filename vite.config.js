import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
  build: {
    rollupOptions: {
      external: [
        /^node:.*/, '@safe-globalThis/safe-ethers-adapters'
      ]
    }
}
});