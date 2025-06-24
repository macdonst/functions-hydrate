import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 30000,
    globals: false, // get out
    environment: 'node',
    include: ['test/**/*.test.ts'],
    disableConsoleIntercept: true, // helps @oclif/test helpers
  },
})
