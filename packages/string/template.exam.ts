import { template } from './template'

const temp = 'hello {0}, {1}, 达到了惊人的{2}个!'

console.log(console.log(template(temp, '@vtrbo/utils', '你收集的工具函数是最多的', 100)))
