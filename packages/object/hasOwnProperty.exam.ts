import { hasOwnProperty } from './hasOwnProperty'

const object = {
  name: '@vtrbo/utils',
  age: 2,
  fnNum: 100,
  isPublish: true,
}

console.log(hasOwnProperty(object, 'name'))
