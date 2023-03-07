/**
 * @desc 确保字符串前缀
 *
 * @func ensurePrefix
 * @param { string } str - 字符串
 * @param { string } prefix - 前缀
 * @returns { string } 确保前缀的字符串
 */
export function ensurePrefix(str: string, prefix: string): string {
  if (!str.startsWith(prefix))
    return prefix + str
  return str
}
