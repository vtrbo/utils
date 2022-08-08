import { isType } from './isType'

/**
 * @description 是否是数组
 *
 * @function isArray
 * @param { any } data
 * @returns { boolean }
 */
export const isArray = (data: any): boolean => isType(data, 'Array')
