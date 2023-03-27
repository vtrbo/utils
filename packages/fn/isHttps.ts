/**
 * @desc 是否是https协议
 *
 * @func isHttps
 * @returns { boolean } 校验结果
 */
export function isHttps(): boolean {
  const protocol = window.location.protocol
  if (protocol === 'https:') {
    return true
  }
  else if (protocol === 'http:') {
    return false
  }
  else {
    const baseUrl = window.location.origin
    return baseUrl.startsWith('https:')
  }
}
