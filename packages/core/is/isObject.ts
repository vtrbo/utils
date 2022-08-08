import { isType } from './isType'

/**
 * @description 是否是对象
 *
 * @function isObject
 * @param { any } data
 * @returns { boolean }
 */
export const isObject = (data: any): boolean => isType(data, 'Object')
