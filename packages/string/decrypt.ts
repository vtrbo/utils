/**
 * @description 字符串解密
 *
 * @function decrypt
 * @param { string } data - 欲解密数据
 * @param { string } salt - 盐
 * @returns { string } - 解密数据
 */
export function decrypt(data: string, salt?: string): string {
  salt = salt || 'vtrbo-zRsEQxkJMUHiDlpST74wG512nF0c6gB3uX8_K9qCOWLNjPaYmhAZVdyIfe'
  const sl = salt.length
  const ra = new Array(Math.floor(data.length / 3))
  let crd = 0
  let mrd = 0
  let trd = 0
  for (let i = 0, ci = 0; i < ra.length; i++) {
    crd = salt.indexOf(data.charAt(ci))
    ci++
    mrd = salt.indexOf(data.charAt(ci))
    ci++
    trd = salt.indexOf(data.charAt(ci))
    ci++
    ra[i] = crd * sl * sl + mrd * sl + trd
  }
  return String.fromCharCode(...ra)
}
