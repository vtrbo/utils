import { isType } from './isType'

/**
 * @description 是否是 NULL
 *
 * @function isNull
 * @param { any } data
 * @returns { boolean }
 */
export const isNull = (data: any): boolean => isType(data, 'Null')
