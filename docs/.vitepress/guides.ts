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
    text: 'utils-color',
    items: [
      {
        text: 'hexToRgba',
        link: '/functions/color/hexToRgba',
      },
      {
        text: 'rgbaToHex',
        link: '/functions/color/rgbaToHex',
      },
      {
        text: 'darken',
        link: '/functions/color/darken',
      },
      {
        text: 'lighten',
        link: '/functions/color/lighten',
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
