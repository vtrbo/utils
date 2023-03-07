import { once } from './once'

const func = (num: number) => {
  return num++
}

const onceFunc = once(func)

console.log(onceFunc((6)))
