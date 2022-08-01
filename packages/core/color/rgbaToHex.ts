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
