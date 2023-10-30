import type { DefaultTheme } from 'vitepress'

export const functions: DefaultTheme.NavItem[] = [
  {
    text: 'Is',
    collapsed: false,
    items: [
      {
        text: 'isType',
        link: '/functions/is/isType',
      },
    ],
  },
]

export const nav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/' },
  { text: 'Functions', items: functions },
]

export const sidebar = {
  '/guide': [
    { text: 'Developer Guide', items: [] },
  ],
}
