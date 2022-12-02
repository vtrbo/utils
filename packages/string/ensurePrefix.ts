/**
 * @description 确保字符串前缀
 *
 * @function ensurePrefix
 * @param { string } prefix - 前缀
 * @param { string } data - 源数据
 * @returns { string } - 确保前缀的数据
 */
export function ensurePrefix(prefix: string, data: string): string {
  if (!data.startsWith(prefix))
    return prefix + data
  return data
}
