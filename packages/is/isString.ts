import { isType } from './isType'

/**
 * @description 是否是字符串
 *
 * @function isString
 * @param { any } data - 欲校验的值
 * @returns { boolean } - 校验结果
 */
export const isString = (data: any): boolean => isType(data, 'String')
