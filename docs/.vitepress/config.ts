import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Victor Bo Utils',
  description: 'Collection of common JavaScript or TypeScript utils.',

  base: '/',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      text: '为此页提供修改建议',
      pattern: 'https://github.com/vtrbo/utils/edit/main/docs/:path',
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/vtrbo88' },
      { icon: 'github', link: 'https://github.com/vtrbo/utils' },
    ],

    localeLinks: {
      text: '简体中文',
      items: [],
    },

    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2022-present Victor Bo',
    },

    nav: [
      { text: '指引', link: '/guide/what-is-utils', activeMatch: '/guide/' },
      { text: '函数', link: '/method/string', activeMatch: '/method/' },
    ],

    sidebar: {
      '/guide/': sideGuide(),
      '/method/': sideMethod(),
    },
  },
})

function sideGuide() {
  return [
    {
      text: '基础',
      collapsible: true,
      items: [
        { text: '介绍', link: '/guide/what-is-utils' },
        { text: '快速上手', link: '/guide/get-started' },
      ],
    },
  ]
}

function sideMethod() {
  return [
    {
      text: '模块',
      collapsible: true,
      items: [
        { text: 'string', link: '/method/string' },
        { text: 'tool', link: '/method/tool' },
      ],
    },
  ]
}
