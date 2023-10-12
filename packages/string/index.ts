// 此文件为自动生成的导出文件
// 请务必不要在此文件进行修改或其他操作
// 因为你做的所有修改和操作都不会生效
import {
  capitalize,
} from './capitalize'

import {
  ensurePrefix,
} from './ensurePrefix'

import {
  ensureSuffix,
} from './ensureSuffix'

import {
  getCenter,
} from './getCenter'

import {
  getLeft,
} from './getLeft'

import {
  getRight,
} from './getRight'

import {
  getUrlQuery,
} from './getUrlQuery'

import {
  setUrlQuery,
} from './setUrlQuery'

import {
  template,
} from './template'

import {
  toCamelCase,
} from './toCamelCase'

import {
  toEscape,
} from './toEscape'

import {
  toLinesCase,
} from './toLinesCase'

import {
  toSlash,
} from './toSlash'

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
// // 按需引入 String 的函数库
// import { resolveArrayUtils } from '@vtrbo/utils/array'
//
// autoImports({
//   imports: [
//     // 全局引入
//     // resolveUtils(),
//     // 按需引入 String 的函数库
//     resolveStringUtils(),
//   ]
// })
export const resolveStringUtils = (aliasPrefix?: string): Record<string, [string, string][]> => {
  return {
    '@vtrbo/utils/string': [
      ['capitalize', aliasPrefix ? `${aliasPrefix}Capitalize` : 'capitalize'],
      ['ensurePrefix', aliasPrefix ? `${aliasPrefix}EnsurePrefix` : 'ensurePrefix'],
      ['ensureSuffix', aliasPrefix ? `${aliasPrefix}EnsureSuffix` : 'ensureSuffix'],
      ['getCenter', aliasPrefix ? `${aliasPrefix}GetCenter` : 'getCenter'],
      ['getLeft', aliasPrefix ? `${aliasPrefix}GetLeft` : 'getLeft'],
      ['getRight', aliasPrefix ? `${aliasPrefix}GetRight` : 'getRight'],
      ['getUrlQuery', aliasPrefix ? `${aliasPrefix}GetUrlQuery` : 'getUrlQuery'],
      ['setUrlQuery', aliasPrefix ? `${aliasPrefix}SetUrlQuery` : 'setUrlQuery'],
      ['template', aliasPrefix ? `${aliasPrefix}Template` : 'template'],
      ['toCamelCase', aliasPrefix ? `${aliasPrefix}ToCamelCase` : 'toCamelCase'],
      ['toEscape', aliasPrefix ? `${aliasPrefix}ToEscape` : 'toEscape'],
      ['toLinesCase', aliasPrefix ? `${aliasPrefix}ToLinesCase` : 'toLinesCase'],
      ['toSlash', aliasPrefix ? `${aliasPrefix}ToSlash` : 'toSlash'],
    ],
  }
}

export {
  capitalize,
  ensurePrefix,
  ensureSuffix,
  getCenter,
  getLeft,
  getRight,
  getUrlQuery,
  setUrlQuery,
  template,
  toCamelCase,
  toEscape,
  toLinesCase,
  toSlash,
}

export default {
  capitalize,
  ensurePrefix,
  ensureSuffix,
  getCenter,
  getLeft,
  getRight,
  getUrlQuery,
  setUrlQuery,
  template,
  toCamelCase,
  toEscape,
  toLinesCase,
  toSlash,
}
