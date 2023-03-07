// 此文件为自动生成的导出文件
// 请务必不要在此文件进行修改或其他操作
// 因为你做的所有修改和操作都不会生效
import {
  darken,
} from './darken'

import {
  hexToRgba,
} from './hexToRgba'

import {
  lighten,
} from './lighten'

import {
  rgbaToHex,
} from './rgbaToHex'

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
// // 按需引入 Color 的函数库
// import { resolveArrayUtils } from '@vtrbo/utils/array'
//
// autoImports({
//   imports: [
//     // 全局引入
//     // resolveUtils(),
//     // 按需引入 Color 的函数库
//     resolveColorUtils(),
//   ]
// })
export const resolveColorUtils = (aliasPrefix?: string): Record<string, [string, string][]> => {
  return {
    '@vtrbo/utils/color': [
      ['darken', aliasPrefix ? `${aliasPrefix}Darken` : 'darken'],
      ['hexToRgba', aliasPrefix ? `${aliasPrefix}HexToRgba` : 'hexToRgba'],
      ['lighten', aliasPrefix ? `${aliasPrefix}Lighten` : 'lighten'],
      ['rgbaToHex', aliasPrefix ? `${aliasPrefix}RgbaToHex` : 'rgbaToHex'],
    ],
  }
}

export {
  darken,
  hexToRgba,
  lighten,
  rgbaToHex,
}

export default {
  darken,
  hexToRgba,
  lighten,
  rgbaToHex,
}
