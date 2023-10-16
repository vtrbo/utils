import { defineConfig } from 'vitest/config'

export default defineConfig({
  optimizeDeps: {
    disabled: true,
  },
  server: {
    port: 9528,
  },
  test: {
    include: ['packages/**/*.{test,spec}.{js,ts}'],
  },
})
