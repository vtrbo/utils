import { isType } from './isType'

/**
 * @desc 是否是 UNDEFINED
 *
 * @func isUndefined
 * @param { any } data - 欲校验的值
 * @returns { boolean } 校验结果
 */
export function isUndefined(data: any): boolean {
  return isType(data, 'Undefined')
}
