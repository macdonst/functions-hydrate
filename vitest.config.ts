import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: false, // get out
    environment: 'node',
    include: ['test/**/*.test.ts'],
    disableConsoleIntercept: true, // helps @oclif/test helpers
  },
})
