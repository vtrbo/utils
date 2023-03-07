/**
 * @desc 确保字符串后缀
 *
 * @func ensureSuffix
 * @param { string } str - 字符串
 * @param { string } suffix - 后缀
 * @returns { string } 确保后缀的字符串
 */
export function ensureSuffix(str: string, suffix: string): string {
  if (!str.endsWith(suffix))
    return str + suffix
  return str
}
