import { defineConfig } from 'vitepress'
import { head } from './head'
import { nav, sidebar } from './guides'

export default defineConfig({
  title: 'VictorBo\'s Utils',
  description: 'Collection of common JavaScript or TypeScript utils.',
  head,
  themeConfig: {
    logo: '/logo.svg',
    outline: { label: '快速定位' },
    lastUpdated: { text: '最近更新时间' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    editLink: { text: '为此页提供修改建议', pattern: 'https://github.com/vtrbo/utils/edit/main/docs/:path' },
    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/vtrbo88' },
      { icon: 'github', link: 'https://github.com/vtrbo/utils' },
    ],
    footer: { message: 'MIT Licensed', copyright: 'Copyright © 2022-PRESENT VictorBo' },
    nav,
    sidebar,
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
})
