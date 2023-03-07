import { isColor } from './isColor'

const color: string = 'rgb(12, 43, 128, .8)'
const type: 'HEX' | 'RGB' | 'RGBA' = 'HEX'

console.log(isColor(color, type))
