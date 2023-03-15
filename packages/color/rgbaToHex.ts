import { isColor } from '../regex/isColor'

/**
 * @desc RGBA 转 HEX
 *
 * @func rgbaToHex
 * @param { string } rgba - RGBA 颜色
 * @returns { string } HEX 颜色
 */
export const rgbaToHex = (rgba: string): string => {
  if (isColor(rgba, 'HEX'))
    return rgba

  if (!isColor(rgba, 'RGB') && !isColor(rgba, 'RGBA'))
    return ''

  const rgbaValue = rgba.replace('rgba(', '').replace('rgb(', '').replace(')', '')
  const [r, g, b, a] = rgbaValue.split(',').map(m => +m)
  if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255)
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}${(a || a === 0) ? (a * 255 | 1 << 8).toString(16).slice(1) : ''}`
  return ''
}
