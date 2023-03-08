import { objectEntries } from './objectEntries'

const object = {
  name: '@vtrbo/utils',
  age: 2,
  fnNum: 100,
  isPublish: true,
}

console.log(objectEntries(object))
