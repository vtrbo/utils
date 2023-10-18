import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/' },
]

export const sidebar = {
  '/guide': [
    { text: 'Developer Guide', items: [] },
  ],
}
