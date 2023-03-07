/**
 * @desc 生成随机颜色
 *
 * @func randomColor
 * @param { 'HEX' | 'RGBA' } [type] - 颜色类型 = 'HEX'
 * @returns { string } 生成的颜色
 */
export function randomColor(type: 'HEX' | 'RGBA' = 'HEX'): string {
  const typeMap = {
    HEX: `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(8, '0')}`,
    RGBA: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 100) / 100})`,
  }
  return typeMap[type]
}
