import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  webServer: {
    command: "npm run dev -- --hostname 127.0.0.1 --port 3001",
    url: "http://127.0.0.1:3001",
    reuseExistingServer: true,
    timeout: 60000,
  },
  use: { baseURL: "http://127.0.0.1:3001", browserName: "chromium", reducedMotion: "reduce" },
  reporter: "list",
});
