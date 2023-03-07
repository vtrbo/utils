import { isType } from './isType'

/**
 * @desc 是否是数值
 *
 * @func isNumber
 * @param { any } data - 欲校验类型的数据
 * @returns { boolean } 校验结果
 */
export function isNumber(data: any): boolean {
  return isType(data, 'Number')
}
