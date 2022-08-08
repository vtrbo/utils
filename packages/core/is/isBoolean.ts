import { isType } from './isType'

/**
 * @description 是否是布尔
 *
 * @function isBoolean
 * @param { any } data
 * @returns { boolean }
 */
export const isBoolean = (data: any): boolean => isType(data, 'Boolean')
