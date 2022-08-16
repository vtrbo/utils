import { isType } from './isType'

/**
 * @description 是否是 NULL
 *
 * @function isNull
 * @param { any } data - 欲校验的值
 * @returns { boolean } - 校验结果
 */
export const isNull = (data: any): boolean => isType(data, 'Null')
