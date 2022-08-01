/**
 * @description 确保字符串后缀
 *
 * @function ensureSuffix
 * @param { string } suffix
 * @param { string } data
 * @returns { string }
 */
export function ensureSuffix(suffix: string, data: string): string {
  if (!data.endsWith(suffix))
    return data + suffix
  return data
}
