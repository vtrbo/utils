import { isType } from './isType'

/**
 * @desc 是否是布尔
 *
 * @func isBoolean
 * @param { any } data - 欲校验类型的数据
 * @returns { data is boolean } 校验结果
 */
export function isBoolean(data: any): data is boolean {
  return isType(data, 'Boolean')
}
