import { isMap } from './isMap'

const data: Map<string, number> = new Map([
  ['Michael', 95],
  ['Bob', 75],
  ['Tracy', 85],
])

console.log(isMap(data))
