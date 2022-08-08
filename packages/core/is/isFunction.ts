import { isType } from './isType'

/**
 * @description 是否是函数
 *
 * @function isFunction
 * @param { any } data
 * @returns { boolean }
 */
export const isFunction = (data: any): boolean => isType(data, 'Function')
