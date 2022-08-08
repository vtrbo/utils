import { isType } from './isType'

/**
 * @description 是否是数值
 *
 * @function isNumber
 * @param { any } data
 * @returns { boolean }
 */
export const isNumber = (data: any): boolean => isType(data, 'Number')
