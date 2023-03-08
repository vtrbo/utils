/**
 * @desc 转换成短横线
 *
 * @func toKebabCase
 * @param { string } str - 字符串
 * @returns { string } 短横线字符串
 */
export function toKebabCase(str: string): string {
  return str.replace(/[A-Z]/g, key => `-${key.toLowerCase()}`)
}
