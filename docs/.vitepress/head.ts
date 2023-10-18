import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['meta', { property: 'og:title', content: '@vtrbo/utils' }],
  ['meta', { property: 'og:description', content: 'Collection of common JavaScript or TypeScript utils.' }],
  ['meta', { property: 'og:url', content: 'https://github.com/vtrbo/utils' }],
  ['meta', { name: 'referrer', content: 'no-referrer' }],
  ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
]
