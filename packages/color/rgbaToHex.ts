/**
 * @description RGBA 转 HEX
 *
 * @function rgbaToHex
 * @param { number[] } rgba - RGBA颜色
 * @returns { string } - 16进制颜色
 */
export const rgbaToHex = (rgba: number[]): string => {
  const [r, g, b, a] = rgba
  if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255)
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}${(a || a === 0) ? (a * 255 | 1 << 8).toString(16).slice(1) : ''}`
  return ''
}
