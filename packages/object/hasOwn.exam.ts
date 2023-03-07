import { hasOwn } from './hasOwn'

const object = {
  name: '@vtrbo/utils',
  age: 2,
  fnNum: 100,
  isPublish: true,
}

console.log(hasOwn(object, 'name'))
