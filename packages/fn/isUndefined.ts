import { isType } from './isType'

/**
 * @desc 是否是 UNDEFINED
 *
 * @func isUndefined
 * @param { any } data - 欲校验的值
 * @returns { data is undefined } 校验结果
 */
export function isUndefined(data: any): data is undefined {
  return isType(data, 'Undefined')
}
