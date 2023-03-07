import { isString } from '../is/isString'
import { hexToRgba } from './hexToRgba'
import { rgbaToHex } from './rgbaToHex'

/**
 * @desc 加深颜色
 *
 * @func colorDarken
 * @param { string | number[] } color - 16进制颜色 | RGBA颜色
 * @param { number } level - 加深权重 0 自身 10 黑色 = 0
 * @param { 'HEX' | 'RGBA' } type - 加深权重 = 'HEX'
 * @returns { string | number[] } - HEX | [R, G, B, A]
 */
export function colorDarken(color: string | number[], level: number = 0, type: 'HEX' | 'RGBA' = 'HEX'): string | number[] {
  let rgba: number[] = color as number[]
  if (isString(color))
    rgba = hexToRgba(color as string)
  for (let i = 0; i < 3; i++) rgba[i] = Math.floor(rgba[i] * (10 - level) / 10)
  return type === 'HEX' ? rgbaToHex(rgba) : rgba
}
