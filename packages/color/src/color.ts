import { isColor } from '@vtrbo/utils-is'

export function rgbaToHex(rgba: string): string {
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

export function hexToRgba(hex: string): string {
  if (isColor(hex, 'RGB') || isColor(hex, 'RGBA'))
    return hex

  if (!isColor(hex, 'HEX'))
    return ''

  const getSingle = (start: number, end: number) => Number.parseInt(`0x${hex.slice(start, end)}${hex.slice(start, end)}`)
  const getDouble = (start: number, end: number) => Number.parseInt(`0x${hex.slice(start, end)}`)
  const getAlpha = (start: number, end: number, fn: typeof getSingle | typeof getDouble) => Math.round(fn(start, end) / 255 * 100) / 100

  const hexMap: { [key: number]: string } = {
    4: `rgb(${getSingle(1, 2)}, ${getSingle(2, 3)}, ${getSingle(3, 4)})`,
    5: `rgba(${getSingle(1, 2)}, ${getSingle(2, 3)}, ${getSingle(3, 4)}, ${getAlpha(4, 5, getSingle)})`,
    7: `rgb(${getDouble(1, 3)}, ${getDouble(3, 5)}, ${getDouble(5, 7)})`,
    9: `rgba(${getDouble(1, 3)}, ${getDouble(3, 5)}, ${getDouble(5, 7)}, ${getAlpha(7, 9, getDouble)})`,
  }
  return hexMap[hex.length] || ''
}

export function lighten(color: string, level: number = 10): string {
  if (!isColor(color, 'HEX') && !isColor(color, 'RGB') && !isColor(color, 'RGBA'))
    return ''

  let rgbaColor: string = ''
  let rgba: number[] = []
  let type: 'HEX' | 'RGB' | 'RGBA' = 'RGBA'
  if (isColor(color, 'HEX')) {
    rgbaColor = hexToRgba(color)
    type = 'HEX'
  }
  else {
    rgbaColor = color
    type = isColor(color, 'RGBA') ? 'RGBA' : 'RGB'
  }

  const rgbaValue = rgbaColor.replace('rgba(', '').replace('rgb(', '').replace(')', '')
  rgba = rgbaValue.split(',').map(m => +m)

  for (let i = 0; i < 3; i++) rgba[i] = Math.floor((255 - rgba[i]) * level / 10 + rgba[i])

  const typeMap = {
    HEX: '',
    RGB: `rgb(${rgba.join(', ')})`,
    RGBA: `rgba(${rgba.join(', ')})`,
  }

  const lightenColor = typeMap[type]

  return lightenColor || rgbaToHex(rgba.length === 3 ? typeMap.RGB : typeMap.RGBA)
}

export function darken(color: string, level: number = 0): string {
  if (!isColor(color, 'HEX') && !isColor(color, 'RGB') && !isColor(color, 'RGBA'))
    return ''

  let rgbaColor: string = ''
  let rgba: number[] = []
  let type: 'HEX' | 'RGB' | 'RGBA' = 'RGBA'
  if (isColor(color, 'HEX')) {
    rgbaColor = hexToRgba(color)
    type = 'HEX'
  }
  else {
    rgbaColor = color
    type = isColor(color, 'RGBA') ? 'RGBA' : 'RGB'
  }

  const rgbaValue = rgbaColor.replace('rgba(', '').replace('rgb(', '').replace(')', '')
  rgba = rgbaValue.split(',').map(m => +m)

  for (let i = 0; i < 3; i++) rgba[i] = Math.floor(rgba[i] * (10 - level) / 10)

  const typeMap = {
    HEX: '',
    RGB: `rgb(${rgba.join(', ')})`,
    RGBA: `rgba(${rgba.join(', ')})`,
  }

  const darkenColor = typeMap[type]

  return darkenColor || rgbaToHex(rgba.length === 3 ? typeMap.RGB : typeMap.RGBA)
}
