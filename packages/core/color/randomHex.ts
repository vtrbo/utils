/**
 * @description 生成随机 HEX 颜色
 *
 * @function randomHex
 * @returns { string }
 */
export const randomHex = (): string => `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0')}`
