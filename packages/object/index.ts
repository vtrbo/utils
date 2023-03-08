// 此文件为自动生成的导出文件
// 请务必不要在此文件进行修改或其他操作
// 因为你做的所有修改和操作都不会生效
import {
  deepClone,
} from './deepClone'

import {
  deepMerge,
} from './deepMerge'

import {
  hasOwnProperty,
} from './hasOwnProperty'

import {
  isKeyOf,
} from './isKeyOf'

import {
  objectEntries,
} from './objectEntries'

import {
  objectKeys,
} from './objectKeys'

import {
  objectMap,
} from './objectMap'

import {
  objectOmit,
} from './objectOmit'

import {
  objectPick,
} from './objectPick'

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
      ['deepClone', aliasPrefix ? `${aliasPrefix}DeepClone` : 'deepClone'],
      ['deepMerge', aliasPrefix ? `${aliasPrefix}DeepMerge` : 'deepMerge'],
      ['hasOwnProperty', aliasPrefix ? `${aliasPrefix}HasOwnProperty` : 'hasOwnProperty'],
      ['isKeyOf', aliasPrefix ? `${aliasPrefix}IsKeyOf` : 'isKeyOf'],
      ['objectEntries', aliasPrefix ? `${aliasPrefix}ObjectEntries` : 'objectEntries'],
      ['objectKeys', aliasPrefix ? `${aliasPrefix}ObjectKeys` : 'objectKeys'],
      ['objectMap', aliasPrefix ? `${aliasPrefix}ObjectMap` : 'objectMap'],
      ['objectOmit', aliasPrefix ? `${aliasPrefix}ObjectOmit` : 'objectOmit'],
      ['objectPick', aliasPrefix ? `${aliasPrefix}ObjectPick` : 'objectPick'],
    ],
  }
}

export {
  deepClone,
  deepMerge,
  hasOwnProperty,
  isKeyOf,
  objectEntries,
  objectKeys,
  objectMap,
  objectOmit,
  objectPick,
}

export default {
  deepClone,
  deepMerge,
  hasOwnProperty,
  isKeyOf,
  objectEntries,
  objectKeys,
  objectMap,
  objectOmit,
  objectPick,
}
