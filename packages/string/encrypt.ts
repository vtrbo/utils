/**
 * @description 字符串加密
 *
 * @function encrypt
 * @param { string } data - 欲加密数据
 * @param { string } source - 字符库
 * @returns { string } - 加密数据
 */
export function encrypt(data: string, source: string = 'vtrbo-zRsEQxkJMUHiDlpST74wG512nF0c6gB3uX8_K9qCOWLNjPaYmhAZVdyIfe'): string {
  const sl = source.length
  const sa = source.split('')
  let rs = ''
  let cc = 0
  let crd = 0
  let mrd = 0
  let trd = 0
  for (let i = 0; i < data.length; i++) {
    cc = data.charCodeAt(i)
    crd = cc % sl
    cc = (cc - crd) / sl
    mrd = cc % sl
    cc = (cc - mrd) / sl
    trd = cc % sl
    rs += sa[trd] + sa[mrd] + sa[crd]
  }
  return rs
}
