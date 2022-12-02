import { isType } from './isType'

/**
 * @description 是否是数组
 *
 * @function isArray
 * @param { any } data - 欲校验的值
 * @returns { boolean } - 校验结果
 */
export const isArray = (data: any): boolean => isType(data, 'Array')
