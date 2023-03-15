import { isType } from './isType'

/**
 * @desc 是否是正则
 *
 * @func isRegExp
 * @param { any } data - 欲校验类型的数据
 * @returns { data is RegExp } 校验结果
 */
export function isRegExp(data: any): data is RegExp {
  return isType(data, 'RegExp')
}
