/**
 * @description 生成随机字符串
 *
 * @function randomString
 * @param { number } size?
 * @param { string } dict?
 */
export function randomString(size?: number, dict?: string) {
  size = size || 16
  dict = dict || 'vtrbo-zRsEQxkJMUHiDlpST74wG512nF0c6gB3uX8_K9qCOWLNjPaYmhAZVdyIfe'
  let id = ''
  let i = size
  const length = dict.length
  while (i--)
    id += dict[(Math.random() * length) | 0]
  return id
}
