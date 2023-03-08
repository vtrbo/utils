import { notUndefined } from './notUndefined'

const array = ['@vtrbo/utils', null, 'null', undefined, 'undefined', 100, true, { name: 'Victor Bo' }, () => 'string']

console.log(array.filter(notUndefined))
