import { lighten } from '@vtrbo/utils-color'

const rgba: string = 'rgba(123, 32, 18, 0.6)'
console.log(lighten(rgba, 4))

const rgb: string = 'rgb(123, 32, 18)'
const level4: number = 4
console.log(lighten(rgb, level4))
