import { isType } from './isType'

/**
 * @desc 是否为 SET
 *
 * @func isSet
 * @param { any } data - 欲校验类型的数据
 * @returns { data is Set<any> } 校验结果
 */
export function isSet(data: any): data is Set<any> {
  return isType(data, 'Set')
}
