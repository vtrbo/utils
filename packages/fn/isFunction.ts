import { isType } from './isType'

/**
 * @desc 是否是函数
 *
 * @func isFunction
 * @param { any } data - 欲校验类型的数据
 * @returns { data is Function } 校验结果
 */
export function isFunction(data: any): data is Function {
  return isType(data, 'Function')
}
