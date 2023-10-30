import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { viteExternalsPlugin } from 'vite-plugin-externals'

export default defineConfig({
  plugins: [
    UnoCSS(),
    viteExternalsPlugin({
      typescript: 'ts',
    }),
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
