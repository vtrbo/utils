import { isType } from './isType'

/**
 * @desc 是否是对象
 *
 * @func isObject
 * @param { any } data - 欲校验类型的数据
 * @returns { boolean } 校验结果
 */
export function isObject(data: any): boolean {
  return isType(data, 'Object')
}
