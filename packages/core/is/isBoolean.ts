import { isType } from './isType'

/**
 * @description 是否是布尔
 *
 * @function isBoolean
 * @param { any } data - 欲校验的值
 * @returns { boolean } - 校验结果
 */
export const isBoolean = (data: any): boolean => isType(data, 'Boolean')
