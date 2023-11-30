import type { DefaultTheme } from 'vitepress'

export const functions: DefaultTheme.NavItemChildren[] = [
  {
    text: 'utils-arr',
    items: [
      {
        text: 'toArray',
        link: '/functions/arr/toArray',
      },
      {
        text: 'groupBy',
        link: '/functions/arr/groupBy',
      },
    ],
  },
  {
    text: 'utils-is',
    items: [
      {
        text: 'isType',
        link: '/functions/is/isType',
      },
      {
        text: 'isString',
        link: '/functions/is/isString',
      },
      {
        text: 'isNumber',
        link: '/functions/is/isNumber',
      },
      {
        text: 'isBoolean',
        link: '/functions/is/isBoolean',
      },
    ],
  },

]

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/' },
  { text: 'Functions', items: functions },
]

export const sidebar: DefaultTheme.Sidebar = {
  '/functions': functions,
}
