import { isColor } from '../regex/isColor'
import { hexToRgba } from './hexToRgba'
import { rgbaToHex } from './rgbaToHex'

/**
 * @desc 变浅颜色
 *
 * @func lighten
 * @param { string } color - 颜色
 * @param { number } level - 变浅权重 0 自身 10 白色 = 0
 * @returns { string } 变浅后的颜色
 */
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
