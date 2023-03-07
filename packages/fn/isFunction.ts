import { isType } from './isType'

/**
 * @desc 是否是函数
 *
 * @func isFunction
 * @param { any } data - 欲校验类型的数据
 * @returns { boolean } 校验结果
 */
export function isFunction(data: any): boolean {
  return isType(data, 'Function')
}
