import { deepMerge } from './deepMerge'

const target = {
  name: '@vtrbo/utils',
  fnNum: 100,
  isPublish: true,
  callback: () => {},
  extend: [
    'string',
    {
      array: ['toArray'],
    },
    [
      'isNumber',
      {
        name: 'toNumber',
      },
    ],
  ],
  includes: {
    name: 'object',
    fn: [
      'clone',
      {
        name: 'keys',
      },
    ],
  },
}

const source1 = {
  source1: 'string工具库',
  age1: 2,
  extend: [
    'toString',
    {
      name: 'toString',
    },
  ],
}

const source2 = {
  source2: 'string工具库',
  age2: 2,
  extend: [
    'toString',
    {
      name: 'toString',
    },
  ],
}

console.log(deepMerge(target, source1, source2))
