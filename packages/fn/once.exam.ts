import { once } from './once'

let count: number = 0
const func = () => {
  count += 1
  return count
}
const onceFunc = once(func)

console.log(onceFunc())
