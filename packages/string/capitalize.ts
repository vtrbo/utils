/**
 * @desc 首字母大写
 *
 * @func capitalize
 * @param { string } str - 字符串
 * @returns { string } 大写后的数据
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
