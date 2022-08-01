/**
 * @description RGBA 转 HEX
 *
 * @function rgbaToHex
 * @param { number } r 0 - 255
 * @param { number } g 0 - 255
 * @param { number } b 0 - 255
 * @param { number } a? 0 - 1
 * @returns { string }
 */
export const rgbaToHex = (r: number, g: number, b: number, a?: number): string => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}${a || a === 0 ? (a * 255 | 1 << 8).toString(16).slice(1) : ''}`

export const hexToRgba = (hex: string): any => {
  const lengthStrategy: {
    [key: number]: number[]
  } = {
    4: [parseInt(`0x${hex.slice(1, 2)}${hex.slice(1, 2)}`), parseInt(`0x${hex.slice(2, 3)}${hex.slice(2, 3)}`), parseInt(`0x${hex.slice(3, 4)}${hex.slice(3, 4)}`)],
    7: [parseInt(`0x${hex.slice(1, 3)}`), parseInt(`0x${hex.slice(3, 5)}`), parseInt(`0x${hex.slice(5, 7)}`)],
    9: [parseInt(`0x${hex.slice(1, 3)}`), parseInt(`0x${hex.slice(3, 5)}`), parseInt(`0x${hex.slice(5, 7)}`), Math.round(parseInt(`0x${hex.slice(7, 9)}`) / 255 * 100) / 100],
  }
  return lengthStrategy[hex.length]
}

/**
 * @description 生成随机 HEX 颜色
 *
 * @function randomHex
 * @returns { string }
 */
export const randomHex = (): string => `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0')}`
