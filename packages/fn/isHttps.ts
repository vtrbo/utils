/**
 * @desc 是否是https协议
 *
 * @func isHttps
 * @param { string } [url] - url路径
 * @returns { boolean } 校验结果
 */
export function isHttps(url?: string): boolean {
  url = url || location.href.toString()
  return url.startsWith('https')
}
