import { isType } from './isType'

/**
 * @desc 是否为 MAP
 *
 * @func isMap
 * @param { any } data - 欲校验类型的数据
 * @returns { data is Map<any, any> } 校验结果
 */
export function isMap(data: any): data is Map<any, any> {
  return isType(data, 'Map')
}
