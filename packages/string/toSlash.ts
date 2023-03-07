/**
 * @desc 替换 \ 为 /
 *
 * @func toSlash
 * @param { string } str - 字符串
 * @returns { string } 替换后的数据
 */
export function toSlash(str: string): string {
  return str.replace(/\\/g, '/')
}
