import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'packages/index.ts',
    'packages/*/index.ts',
  ],
  format: ['cjs', 'esm', 'iife'],
  dts: true,
  splitting: true,
  clean: true,
})
