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
      { text: 'darken', link: '/method/color/darken' },
      { text: 'hexToRgba', link: '/method/color/hexToRgba' },
      { text: 'lighten', link: '/method/color/lighten' },
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
      { text: 'isArray', link: '/method/fn/isArray' },
      { text: 'isBoolean', link: '/method/fn/isBoolean' },
      { text: 'isFunction', link: '/method/fn/isFunction' },
      { text: 'isNull', link: '/method/fn/isNull' },
      { text: 'isNumber', link: '/method/fn/isNumber' },
      { text: 'isObject', link: '/method/fn/isObject' },
      { text: 'isRegExp', link: '/method/fn/isRegExp' },
      { text: 'isString', link: '/method/fn/isString' },
      { text: 'isType', link: '/method/fn/isType' },
      { text: 'isUndefined', link: '/method/fn/isUndefined' },
      { text: 'no', link: '/method/fn/no' },
      { text: 'noop', link: '/method/fn/noop' },
      { text: 'once', link: '/method/fn/once' },
      { text: 'toRawType', link: '/method/fn/toRawType' },
    ],
  },
  {
    text: 'Object',
    items: [],
  },
  {
    text: 'Random',
    items: [
      { text: 'randomColor', link: '/method/random/randomColor' },
      { text: 'randomString', link: '/method/random/randomString' },
    ],
  },
  {
    text: 'Regex',
    items: [
      { text: 'isColor', link: '/method/regex/isColor' },
    ],
  },
  {
    text: 'String',
    items: [
      { text: 'capitalize', link: '/method/string/capitalize' },
      { text: 'ensurePrefix', link: '/method/string/ensurePrefix' },
      { text: 'ensureSuffix', link: '/method/string/ensureSuffix' },
      { text: 'getCenter', link: '/method/string/getCenter' },
      { text: 'getLeft', link: '/method/string/getLeft' },
      { text: 'getRight', link: '/method/string/getRight' },
      { text: 'template', link: '/method/string/template' },
      { text: 'toSlash', link: '/method/string/toSlash' },
    ],
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
