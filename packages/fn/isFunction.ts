import { isType } from './isType'

/**
 * @desc 是否是函数
 *
 * @func isFunction
 * @param { any } data - 欲校验类型的数据
 * @returns { data is T } 校验结果
 */
export function isFunction<T extends Function>(data: any): data is T {
  return isType(data, 'Function')
}
