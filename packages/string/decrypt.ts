/**
 * @description 字符串解密
 *
 * @function decrypt
 * @param { string } data - 欲解密数据
 * @param { string } source - 字符库
 * @returns { string } - 解密数据
 */
export function decrypt(data: string, source: string = 'vtrbo-zRsEQxkJMUHiDlpST74wG512nF0c6gB3uX8_K9qCOWLNjPaYmhAZVdyIfe'): string {
  const sl = source.length
  const ra = new Array(Math.floor(data.length / 3))
  let crd = 0
  let mrd = 0
  let trd = 0
  for (let i = 0, ci = 0; i < ra.length; i++) {
    crd = source.indexOf(data.charAt(ci))
    ci++
    mrd = source.indexOf(data.charAt(ci))
    ci++
    trd = source.indexOf(data.charAt(ci))
    ci++
    ra[i] = crd * sl * sl + mrd * sl + trd
  }
  return String.fromCharCode(...ra)
}
