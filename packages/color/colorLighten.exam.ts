import { colorLighten } from './colorLighten'

const hexColor: string = '#006688'

console.log('HEX类型颜色减淡个层级输出HEX类型', colorLighten(hexColor, 5, 'HEX'))
console.log('HEX类型颜色减淡5个层级输出RGBA类型', colorLighten(hexColor, 5, 'RGBA'))

const rgbaColor: number[] = [128, 255, 76, 0.4]

console.log('RGBA类型颜色减淡5个层级输出HEX类型', colorLighten(rgbaColor, 5, 'HEX'))
console.log('RGBA类型颜色减淡5个层级输出RGBA类型', colorLighten(rgbaColor, 5, 'RGBA'))
