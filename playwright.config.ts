import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/visual',
  fullyParallel: true,
  retries: 0,
  workers: 1,
  use: {
    baseURL: 'http://127.0.0.1:61000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 61000',
    url: 'http://127.0.0.1:61000',
    reuseExistingServer: true,
    timeout: 120000,
  },
})
