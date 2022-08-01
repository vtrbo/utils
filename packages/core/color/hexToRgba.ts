/**
 * @description HEX 转 RGBA
 *
 * @function hexToRgba
 * @param { string } hex
 * @returns { number[] }
 */
export const hexToRgba = (hex: string): number[] => {
  const lengthStrategy: {
    [key: number]: number[]
  } = {
    4: [parseInt(`0x${hex.slice(1, 2)}${hex.slice(1, 2)}`), parseInt(`0x${hex.slice(2, 3)}${hex.slice(2, 3)}`), parseInt(`0x${hex.slice(3, 4)}${hex.slice(3, 4)}`)],
    7: [parseInt(`0x${hex.slice(1, 3)}`), parseInt(`0x${hex.slice(3, 5)}`), parseInt(`0x${hex.slice(5, 7)}`)],
    9: [parseInt(`0x${hex.slice(1, 3)}`), parseInt(`0x${hex.slice(3, 5)}`), parseInt(`0x${hex.slice(5, 7)}`), Math.round(parseInt(`0x${hex.slice(7, 9)}`) / 255 * 100) / 100],
  }
  return lengthStrategy[hex.length]
}
