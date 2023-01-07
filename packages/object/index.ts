// 此文件为自动生成的导出文件
// 请务必不要在此文件进行修改或其他操作
// 因为你做的所有修改和操作都不会生效
import {
  clone,
} from './clone'

import {
  entries,
} from './entries'

import {
  hasOwn,
} from './hasOwn'

import {
  keyIn,
} from './keyIn'

import {
  keys,
} from './keys'

import {
  map,
} from './map'

import {
  merge,
} from './merge'

import {
  omit,
} from './omit'

import {
  pick,
} from './pick'

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
// // 按需引入 Object 的函数库
// import { resolveArrayUtils } from '@vtrbo/utils/array'
//
// autoImports({
//   imports: [
//     // 全局引入
//     // resolveUtils(),
//     // 按需引入 Object 的函数库
//     resolveObjectUtils(),
//   ]
// })
export const resolveObjectUtils = (aliasPrefix?: string): Record<string, [string, string][]> => {
  return {
    '@vtrbo/utils/object': [
      ['clone', aliasPrefix ? `${aliasPrefix}Clone` : 'clone'],
      ['entries', aliasPrefix ? `${aliasPrefix}Entries` : 'entries'],
      ['hasOwn', aliasPrefix ? `${aliasPrefix}HasOwn` : 'hasOwn'],
      ['keyIn', aliasPrefix ? `${aliasPrefix}KeyIn` : 'keyIn'],
      ['keys', aliasPrefix ? `${aliasPrefix}Keys` : 'keys'],
      ['map', aliasPrefix ? `${aliasPrefix}Map` : 'map'],
      ['merge', aliasPrefix ? `${aliasPrefix}Merge` : 'merge'],
      ['omit', aliasPrefix ? `${aliasPrefix}Omit` : 'omit'],
      ['pick', aliasPrefix ? `${aliasPrefix}Pick` : 'pick'],
    ],
  }
}

export {
  clone,
  entries,
  hasOwn,
  keyIn,
  keys,
  map,
  merge,
  omit,
  pick,
}

export default {
  clone,
  entries,
  hasOwn,
  keyIn,
  keys,
  map,
  merge,
  omit,
  pick,
}
