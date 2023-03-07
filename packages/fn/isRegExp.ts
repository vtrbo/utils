import { isType } from './isType'

/**
 * @desc 是否是正则
 *
 * @func isRegExp
 * @param { any } data - 欲校验类型的数据
 * @returns { boolean } 校验结果
 */
export function isRegExp(data: any): boolean {
  return isType(data, 'RegExp')
}
