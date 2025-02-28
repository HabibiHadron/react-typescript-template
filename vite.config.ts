import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleX from "vite-plugin-stylex";
import { ngrok } from "vite-plugin-ngrok";

export default defineConfig({
  plugins: [react(), styleX(), ngrok("ENTER YOUR TOKEN HERE")],
});
