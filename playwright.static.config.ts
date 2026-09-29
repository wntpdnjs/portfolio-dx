import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  webServer: {
    command: "python3 -m http.server 3001 --bind 127.0.0.1 --directory out",
    url: "http://127.0.0.1:3001",
    reuseExistingServer: true,
    timeout: 60000,
  },
  use: { baseURL: "http://127.0.0.1:3001", browserName: "chromium", reducedMotion: "reduce" },
  reporter: "list",
});
