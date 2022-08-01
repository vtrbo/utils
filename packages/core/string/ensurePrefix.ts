/**
 * @description 确保字符串前缀
 *
 * @function ensurePrefix
 * @param { string } prefix
 * @param { string } data
 * @returns { string }
 */
export function ensurePrefix(prefix: string, data: string): string {
  if (!data.startsWith(prefix))
    return prefix + data
  return data
}
