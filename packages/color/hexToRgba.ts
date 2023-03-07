import { isColor } from '../regex/isColor'

/**
 * @desc HEX 转 RGBA
 *
 * @func hexToRgba
 * @param { string } hex - 16进制颜色
 * @returns { string } RGBA 格式的颜色
 */
export const hexToRgba = (hex: string): string => {
  if (!isColor(hex, 'HEX'))
    return ''

  const getSingle = (start: number, end: number) => parseInt(`0x${hex.slice(start, end)}${hex.slice(start, end)}`)
  const getDouble = (start: number, end: number) => parseInt(`0x${hex.slice(start, end)}`)

  const hexMap: {
    [key: number]: string
  } = {
    4: `rgb(${getSingle(1, 2)}, ${getSingle(2, 3)}, ${getSingle(3, 4)})`,
    5: `rgba(${getSingle(1, 2)}, ${getSingle(2, 3)}, ${getSingle(3, 4)}, ${Math.round(getDouble(4, 5) / 255 * 100) / 100})`,
    7: `rgb(${getDouble(1, 3)}, ${getDouble(3, 5)}, ${getDouble(5, 7)})`,
    9: `rgba(${getDouble(1, 3)}, ${getDouble(3, 5)}, ${getDouble(5, 7)}, ${Math.round(getDouble(7, 9) / 255 * 100) / 100})`,
  }
  return hexMap[hex.length] || ''
}
