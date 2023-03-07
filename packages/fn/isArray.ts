import { isType } from './isType'

/**
 * @desc 是否是数组
 *
 * @func isArray
 * @param { any } data - 欲校验类型的数据
 * @returns { boolean } 校验结果
 */
export function isArray(data: any): boolean {
  return isType(data, 'Array')
}
