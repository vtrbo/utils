/**
 * @description RGBA 转 HEX
 *
 * @function rgbaToHex
 * @param { number } r (0 - 255) - 红
 * @param { number } g (0 - 255) - 绿
 * @param { number } b (0 - 255) - 蓝
 * @param { number } [a] (0 - 1) - 透明度
 * @returns { string } - 16进制颜色
 */
export const rgbaToHex = (r: number, g: number, b: number, a?: number): string => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}${a || a === 0 ? (a * 255 | 1 << 8).toString(16).slice(1) : ''}`
