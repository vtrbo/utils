import { toArray } from './toArray'

const param: {
  name: string
  desc: string
} = {
  name: '@vtrbo/utils',
  desc: '一个收集了很多工具函数的库',
}

console.log(toArray(param))
