import { toRawType } from '../tool'
import { firstUpperCase } from '../string'

/**
 * @description 是否是指定类型
 *
 * @function isType
 * @param { any } data
 * @param { string } type
 * @returns { boolean }
 */
export const isType = (data: any, type: string): boolean => toRawType(data) === `${firstUpperCase(type.toLowerCase())}`

/**
 * @description 是否是字符串
 *
 * @function isString
 * @param { any } data
 * @returns { boolean }
 */
export const isString = (data: any): boolean => isType(data, 'String')

/**
 * @description 是否是数值
 *
 * @function isNumber
 * @param { any } data
 * @returns { boolean }
 */
export const isNumber = (data: any): boolean => isType(data, 'Number')

/**
 * @description 是否是布尔
 *
 * @function isBoolean
 * @param { any } data
 * @returns { boolean }
 */
export const isBoolean = (data: any): boolean => isType(data, 'Boolean')

/**
 * @description 是否是对象
 *
 * @function isObject
 * @param { any } data
 * @returns { boolean }
 */
export const isObject = (data: any): boolean => isType(data, 'Object')

/**
 * @description 是否是数组
 *
 * @function isArray
 * @param { any } data
 * @returns { boolean }
 */
export const isArray = (data: any): boolean => isType(data, 'Array')

/**
 * @description 是否是函数
 *
 * @function isFunction
 * @param { any } data
 * @returns { boolean }
 */
export const isFunction = (data: any): boolean => isType(data, 'Function')

/**
 * @description 是否是 NULL
 *
 * @function isNull
 * @param { any } data
 * @returns { boolean }
 */
export const isNull = (data: any): boolean => isType(data, 'Null')

/**
 * @description 是否是 UNDEFINED
 *
 * @function isUndefined
 * @param { any } data
 * @returns { boolean }
 */
export const isUndefined = (data: any): boolean => isType(data, 'Undefined')

/**
 * @description 是否为数字型字符串
 *
 * @function isIntegerString
 * @param { any } data
 * @returns { boolean }
 */
export const isIntegerString = (data: any): boolean => isString(data) && data !== 'NaN' && data[0] !== '-' && `${parseInt(data, 10)}` === data

