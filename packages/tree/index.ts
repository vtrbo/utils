// 此文件为自动生成的导出文件
// 请务必不要在此文件进行修改或其他操作
// 因为你做的所有修改和操作都不会生效
import {
  filter,
} from './filter'

import {
  findNodes,
} from './findNodes'

import {
  findPaths,
} from './findPaths'

import {
  toList,
} from './toList'

// 自动导入函数的方法，仅适用于 unplugin-auto-import 插件
// https://github.com/antfu/unplugin-auto-import
// @param aliasPrefix 别名前缀
// @returns 符合 unplugin-auto-import custom import 的格式
//
// @example 以 vite 为例
// import autoImports from 'unplugin-auto-import/vite'
//
// 全局引入和按需引入原则上不同时使用
// 如果非要使用，请传入不同的 aliasPrefix
// // 全局引入
// // import { resolveUtils } from '@vtrbo/utils'
// // 按需引入 Tree 的函数库
// import { resolveArrayUtils } from '@vtrbo/utils/array'
//
// autoImports({
//   imports: [
//     // 全局引入
//     // resolveUtils(),
//     // 按需引入 Tree 的函数库
//     resolveTreeUtils(),
//   ]
// })
export const resolveTreeUtils = (aliasPrefix?: string): Record<string, [string, string][]> => {
  return {
    '@vtrbo/utils/tree': [
      ['filter', aliasPrefix ? `${aliasPrefix}Filter` : 'filter'],
      ['findNodes', aliasPrefix ? `${aliasPrefix}FindNodes` : 'findNodes'],
      ['findPaths', aliasPrefix ? `${aliasPrefix}FindPaths` : 'findPaths'],
      ['toList', aliasPrefix ? `${aliasPrefix}ToList` : 'toList'],
    ],
  }
}

export {
  filter,
  findNodes,
  findPaths,
  toList,
}

export default {
  filter,
  findNodes,
  findPaths,
  toList,
}