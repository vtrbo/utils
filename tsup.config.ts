import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['packages/core/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  splitting: true,
})
