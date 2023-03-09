/**
 * @desc 字符串的转义
 * 转换字符参考以下
 *
 * > `&` => `&amp;`
 * > `<` => `&lt;`
 * > `>` => `&gt;`
 * > `"` => `&quot;`
 * > `'` => `&#x27;`
 *
 * @func toEscape
 * @param { string } str
 * @returns { string }
 */
export function toEscape(str: string): string {
  const escapeMap: {
    [key: string]: string
  } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#x27;',
  }
  const regex = /(&|<|>|"|')/g
  return str.replace(regex, match => escapeMap[match])
}
