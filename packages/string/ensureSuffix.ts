/**
 * @description 确保字符串后缀
 *
 * @function ensureSuffix
 * @param { string } suffix - 后缀
 * @param { string } data - 源数据
 * @returns { string } - 确保后缀的数据
 */
export function ensureSuffix(suffix: string, data: string): string {
  if (!data.endsWith(suffix))
    return data + suffix
  return data
}
