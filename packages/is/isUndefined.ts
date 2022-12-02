import { isType } from './isType'

/**
 * @description 是否是 UNDEFINED
 *
 * @function isUndefined
 * @param { any } data - 欲校验的值
 * @returns { boolean } - 校验结果
 */
export const isUndefined = (data: any): boolean => isType(data, 'Undefined')
