import { isType } from './isType'

/**
 * @description 是否是字符串
 *
 * @function isString
 * @param { any } data
 * @returns { boolean }
 */
export const isString = (data: any): boolean => isType(data, 'String')
