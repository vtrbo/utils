import { isType } from './isType'

/**
 * @description 是否是 UNDEFINED
 *
 * @function isUndefined
 * @param { any } data
 * @returns { boolean }
 */
export const isUndefined = (data: any): boolean => isType(data, 'Undefined')
