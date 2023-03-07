export default [
  {
    text: 'Array',
    items: [
      { text: 'groupBy', link: '/method/array/groupBy' },
      { text: 'toArray', link: '/method/array/toArray' },
    ],
  },
  {
    text: 'Color',
    items: [
      { text: 'colorDarken', link: '/method/color/colorDarken' },
      { text: 'colorLighten', link: '/method/color/colorLighten' },
      { text: 'hexToRgba', link: '/method/color/hexToRgba' },
      { text: 'randomHex', link: '/method/color/randomHex' },
      { text: 'rgbaToHex', link: '/method/color/rgbaToHex' },
    ],
  },
  {
    text: 'Date',
    items: [
      { text: 'format', link: '/method/date/format' },
    ],
  },
  {
    text: 'Fn',
    items: [
      { text: 'no', link: '/method/fn/no' },
      { text: 'noop', link: '/method/fn/noop' },
      { text: 'once', link: '/method/fn/once' },
      { text: 'toRawType', link: '/method/fn/toRawType' },
    ],
  },
  {
    text: 'Guard',
    items: [],
  },
  {
    text: 'Is',
    items: [],
  },
  {
    text: 'Object',
    items: [],
  },
  {
    text: 'String',
    items: [],
  },
  {
    text: 'Tree',
    items: [],
  },
] as {
  text: string
  items: {
    text: string
    link: string
  }[]
}[]
