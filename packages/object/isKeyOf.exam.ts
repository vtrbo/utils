import { isKeyOf } from './isKeyOf'

const object = {
  name: '@vtrbo/utils',
  age: 2,
  fnNum: 100,
  isPublish: true,
}

console.log(isKeyOf(object, 'name'))
