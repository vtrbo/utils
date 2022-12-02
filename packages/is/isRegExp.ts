import { isType } from './isType'

/**
 * @description 是否是正则
 *
 * @function isRegExp
 * @param { any } data - 欲校验的值
 * @returns { boolean } - 校验结果
 */
export const isRegExp = (data: any): boolean => isType(data, 'RegExp')
