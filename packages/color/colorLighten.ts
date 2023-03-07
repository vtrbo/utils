import { isString } from '../is/isString'
import { hexToRgba } from './hexToRgba'
import { rgbaToHex } from './rgbaToHex'

/**
 * @desc 变浅颜色
 *
 * @func colorLighten
 * @param { string | number[] } color - 16进制颜色 | RGBA颜色
 * @param { number } level - 变浅权重 0 自身 10 白色 = 0
 * @param { 'HEX' | 'RGBA' } type - 返回类型 = 'HEX'
 * @returns { string | number[] } - HEX | [R, G, B, A]
 */
export function colorLighten(color: string | number[], level: number = 10, type: 'HEX' | 'RGBA' = 'HEX'): string | number[] {
  let rgba: number[] = color as number[]
  if (isString(color))
    rgba = hexToRgba(color as string)
  for (let i = 0; i < 3; i++) rgba[i] = Math.floor((255 - rgba[i]) * level / 10 + rgba[i])
  return type === 'HEX' ? rgbaToHex(rgba) : rgba
}
