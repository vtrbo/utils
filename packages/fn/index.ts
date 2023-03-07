// 此文件为自动生成的导出文件
// 请务必不要在此文件进行修改或其他操作
// 因为你做的所有修改和操作都不会生效
import {
  isArray,
} from './isArray'

import {
  isBoolean,
} from './isBoolean'

import {
  isFunction,
} from './isFunction'

import {
  isNull,
} from './isNull'

import {
  isNumber,
} from './isNumber'

import {
  isObject,
} from './isObject'

import {
  isRegExp,
} from './isRegExp'

import {
  isString,
} from './isString'

import {
  isType,
} from './isType'

import {
  isUndefined,
} from './isUndefined'

import {
  no,
} from './no'

import {
  noop,
} from './noop'

import {
  notFalsy,
} from './notFalsy'

import {
  notNull,
} from './notNull'

import {
  notNullish,
} from './notNullish'

import {
  notUndefined,
} from './notUndefined'

import {
  once,
} from './once'

import {
  toRawType,
} from './toRawType'

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
// // 按需引入 Fn 的函数库
// import { resolveArrayUtils } from '@vtrbo/utils/array'
//
// autoImports({
//   imports: [
//     // 全局引入
//     // resolveUtils(),
//     // 按需引入 Fn 的函数库
//     resolveFnUtils(),
//   ]
// })
export const resolveFnUtils = (aliasPrefix?: string): Record<string, [string, string][]> => {
  return {
    '@vtrbo/utils/fn': [
      ['isArray', aliasPrefix ? `${aliasPrefix}IsArray` : 'isArray'],
      ['isBoolean', aliasPrefix ? `${aliasPrefix}IsBoolean` : 'isBoolean'],
      ['isFunction', aliasPrefix ? `${aliasPrefix}IsFunction` : 'isFunction'],
      ['isNull', aliasPrefix ? `${aliasPrefix}IsNull` : 'isNull'],
      ['isNumber', aliasPrefix ? `${aliasPrefix}IsNumber` : 'isNumber'],
      ['isObject', aliasPrefix ? `${aliasPrefix}IsObject` : 'isObject'],
      ['isRegExp', aliasPrefix ? `${aliasPrefix}IsRegExp` : 'isRegExp'],
      ['isString', aliasPrefix ? `${aliasPrefix}IsString` : 'isString'],
      ['isType', aliasPrefix ? `${aliasPrefix}IsType` : 'isType'],
      ['isUndefined', aliasPrefix ? `${aliasPrefix}IsUndefined` : 'isUndefined'],
      ['no', aliasPrefix ? `${aliasPrefix}No` : 'no'],
      ['noop', aliasPrefix ? `${aliasPrefix}Noop` : 'noop'],
      ['notFalsy', aliasPrefix ? `${aliasPrefix}NotFalsy` : 'notFalsy'],
      ['notNull', aliasPrefix ? `${aliasPrefix}NotNull` : 'notNull'],
      ['notNullish', aliasPrefix ? `${aliasPrefix}NotNullish` : 'notNullish'],
      ['notUndefined', aliasPrefix ? `${aliasPrefix}NotUndefined` : 'notUndefined'],
      ['once', aliasPrefix ? `${aliasPrefix}Once` : 'once'],
      ['toRawType', aliasPrefix ? `${aliasPrefix}ToRawType` : 'toRawType'],
    ],
  }
}

export {
  isArray,
  isBoolean,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isString,
  isType,
  isUndefined,
  no,
  noop,
  notFalsy,
  notNull,
  notNullish,
  notUndefined,
  once,
  toRawType,
}

export default {
  isArray,
  isBoolean,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isString,
  isType,
  isUndefined,
  no,
  noop,
  notFalsy,
  notNull,
  notNullish,
  notUndefined,
  once,
  toRawType,
}
