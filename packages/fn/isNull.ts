import { isType } from './isType'

/**
 * @desc 是否是 NULL
 *
 * @func isNull
 * @param { any } data - 欲校验类型的数据
 * @returns { data is null } 校验结果
 */
export function isNull(data: any): data is null {
  return isType(data, 'Null')
}
