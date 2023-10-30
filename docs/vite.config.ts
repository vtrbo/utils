import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
  build: {
    chunkSizeWarningLimit: 999999,
    rollupOptions: {
      external: [
        'typescript',
      ],
    },
  },
})
