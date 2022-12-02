import { isType } from './isType'

/**
 * @description 是否是数值
 *
 * @function isNumber
 * @param { any } data - 欲校验的值
 * @returns { boolean } - 校验结果
 */
export const isNumber = (data: any): boolean => isType(data, 'Number')
