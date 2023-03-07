import { isType } from './isType'

/**
 * @desc 是否是字符串
 *
 * @func isString
 * @param { any } data - 欲校验类型的数据
 * @returns { boolean } 校验结果
 */
export function isString(data: any): boolean {
  return isType(data, 'String')
}
