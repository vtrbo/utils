import { isType } from './isType'

/**
 * @description 是否是函数
 *
 * @function isFunction
 * @param { any } data - 欲校验的值
 * @returns { boolean } - 校验结果
 */
export const isFunction = (data: any): boolean => isType(data, 'Function')
