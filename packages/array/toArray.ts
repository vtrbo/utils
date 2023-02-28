/**
 * @description 转换为数组
 *
 * @function toArray
 * @param { T | T[] } [data] - 欲转换的值
 * @returns { T[] } - 数组
 */
export function toArray<T>(data?: T | T[]): T[] {
  data = data || []
  return Array.isArray(data) ? data : [data]
}
