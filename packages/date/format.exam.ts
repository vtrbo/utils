import { format } from './format'

const date = new Date('2022/2/22')
const pattern = 'DD/MM YYYY'

console.log(format(date, pattern))
