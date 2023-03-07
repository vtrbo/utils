import { isColor } from '../regex/isColor'
import { hexToRgba } from './hexToRgba'
import { rgbaToHex } from './rgbaToHex'

/**
 * @desc 加深颜色
 *
 * @func darken
 * @param { string } color - 颜色
 * @param { number } level - 加深权重 0 自身 10 黑色 = 0
 * @returns { string } 加深后的颜色
 */
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

  return darkenColor || rgbaToHex(darkenColor)
}
