import { isString } from './../is/isString'
import { hexToRgba } from './hexToRgba'
import { rgbaToHex } from './rgbaToHex'

/**
 * @description 变浅颜色
 *
 * @function colorLighten
 * @param { string | number[] } color - 16进制颜色 | RGBA颜色
 * @param { number } level - 加深权重 = 0 0 - 10 0 自身 10 白色
 * @param { 'HEX' | 'RGBA' } type - 返回类型 = 'HEX'
 * @returns { string | number[] } - HEX | [R, G, B, A]
 */
export function colorLighten(color: string | number[], level: number = 0, type: 'HEX' | 'RGBA' = 'HEX'): string | number[] {
  let rgba: number[] = color as number[]
  if (isString(color))
    rgba = hexToRgba(color as string)
  for (let i = 0; i < 3; i++) rgba[i] = Math.floor((255 - rgba[i]) * level / 10 + rgba[i])
  return type === 'HEX' ? rgbaToHex(rgba) : rgba
}
