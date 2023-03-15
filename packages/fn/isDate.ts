import { isType } from './isType'

/**
 * @desc 是否是日期时间
 *
 * @func isDate
 * @param { any } data - 欲校验类型的数据
 * @returns { data is Date } 校验结果
 */
export function isDate(data: any): data is Date {
  return isType(data, 'Date')
}
