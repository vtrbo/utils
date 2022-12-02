/**
 * @description 生成随机字符串
 *
 * @function randomString
 * @param { number } [size] - 长度
 * @param { string } [dict] - 字典库
 * @returns { string } - 生成的随机字符串
 */
export function randomString(size?: number, dict?: string): string {
  size = size || 16
  dict = dict || 'vtrbo-zRsEQxkJMUHiDlpST74wG512nF0c6gB3uX8_K9qCOWLNjPaYmhAZVdyIfe'
  let id = ''
  let i = size
  const length = dict.length
  while (i--)
    id += dict[(Math.random() * length) | 0]
  return id
}
