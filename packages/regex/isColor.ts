/**
 * @desc 是否为颜色
 *
 * @func isColor
 * @param { string } color - 颜色
 * @param { 'HEX' | 'RGB' | 'RGBA' } type - 颜色类型
 * @returns { boolean } 校验结果
 */
export function isColor(color: string, type: 'HEX' | 'RGB' | 'RGBA'): boolean {
  const typeMap = {
    HEX: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/g,
    RGB: /^[rR][gG][bB][\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*,[\s]*){2}([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*){1}[\)]$/g,
    RGBA: /^[rR][gG][bB][aA][\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*,[\s]*){3}[\s]*(1|1.0|0|0.[0-9])[\s]*[\)]{1}$/g,
  }
  return typeMap[type].test(color)
}
