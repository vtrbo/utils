import { isType } from './isType'

/**
 * @description 是否是对象
 *
 * @function isObject
 * @param { any } data - 欲校验的值
 * @returns { boolean } - 校验结果
 */
export const isObject = (data: any): boolean => isType(data, 'Object')
