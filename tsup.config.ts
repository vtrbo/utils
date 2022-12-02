import type { Options } from 'tsup'

export const tsup: Options = {
  entry: [
    'packages/index.ts',
    'packages/*/index.ts',
  ],
  format: ['cjs', 'esm', 'iife'],
  dts: true,
  splitting: true,
  legacyOutput: false,
  clean: true,
  shims: false,
}
