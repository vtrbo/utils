import { isColor } from '../regex/isColor'

/**
 * @desc HEX 转 RGBA
 *
 * @func hexToRgba
 * @param { string } hex - 16进制颜色
 * @returns { string } RGBA 格式的颜色
 */
export const hexToRgba = (hex: string): string => {
  if (isColor(hex, 'RGB') || isColor(hex, 'RGBA'))
    return hex

  if (!isColor(hex, 'HEX'))
    return ''

  const getSingle = (start: number, end: number) => parseInt(`0x${hex.slice(start, end)}${hex.slice(start, end)}`)
  const getDouble = (start: number, end: number) => parseInt(`0x${hex.slice(start, end)}`)
  const getAlpha = (start: number, end: number, fn: typeof getSingle | typeof getDouble) => Math.round(fn(start, end) / 255 * 100) / 100

  const hexMap: {
    [key: number]: string
  } = {
    4: `rgb(${getSingle(1, 2)}, ${getSingle(2, 3)}, ${getSingle(3, 4)})`,
    5: `rgba(${getSingle(1, 2)}, ${getSingle(2, 3)}, ${getSingle(3, 4)}, ${getAlpha(4, 5, getSingle)})`,
    7: `rgb(${getDouble(1, 3)}, ${getDouble(3, 5)}, ${getDouble(5, 7)})`,
    9: `rgba(${getDouble(1, 3)}, ${getDouble(3, 5)}, ${getDouble(5, 7)}, ${getAlpha(7, 9, getDouble)})`,
  }
  return hexMap[hex.length] || ''
}
