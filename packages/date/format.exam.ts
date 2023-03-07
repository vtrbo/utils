import { format } from './format'

console.log(format(new Date('2022/2/22'), 'YYYY'))
console.log(format(new Date(), 'YYYY年MM月'))
console.log(format(new Date('2022-8'), 'DD/MM YYYY'))
