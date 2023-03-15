import { isType } from './isType'

/**
 * @desc 是否是数值
 *
 * @func isNumber
 * @param { any } data - 欲校验类型的数据
 * @returns { data is number } 校验结果
 */
export function isNumber(data: any): data is number {
  return isType(data, 'Number')
}
