# @vtrbo/utils [![npm](https://img.shields.io/npm/v/@vtrbo/utils?color=a1b858&label=)](https://npmjs.com/package/@vtrbo/utils)

## Docs
> [utils.vtrbo.cn](https://uitls.vtrbo.cn)  

## Install
```bash
npm install @vtrbo/utils

# or 
yarn add @vtrbo/utils
pnpm install @vtrbo/utils
```

## Usage
> Global Import  
```js
import utils from '@vtrbo/utils'

utils.random.randomString()
```

> Module Import  
```js
import { random } from '@vtrbo/utils'
// or
// import random from '@vtrbo/utils/random'

random.randomString()
```

> Function Import  
```js
import { randomString } from '@vtrbo/utils/random'

randomString()
```

> I recommend using the `Function Import`, because it does not increase the package size.  

## Join Us  

> 不论是函数入口生成，还是函数文档生成，都是检测有无名称相同的 `*.exam.ts` 文件  
> 这么做的根本原因是为了支持每一个函数都可以在文档中有可以在线运行的例子  
> 因此，`*.exam.ts` 的文件内容也就成了一个函数在文档中在线运行的初始代码  

### Document Generation
```js
/**
 * @desc 方法的中文描述 - 主要用于生成文档中的 Description
 * 支持多行书写方式
 * 可以使用 markdown 的语法
 *
 * @func 方法的名称 - 主要用于生成文档中的侧边导航以及标题
 * @param { 参数类型 } 必填参数名称 - 参数描述
 * @param { 参数类型 } [可选参数名称] - 参数描述 = 默认值
 * @returns { 返回值类型 } 返回值描述
 */
```

### Entry Generation
```js
// 这两种代码书写方式，均可以被扫描成入口函数，前提是有 `[name].exam.ts` 文件

// name 方法的名称 => @func
// param 方法的参数 => @param

export function [name]([param]: [type]): [type] {
  return [return]
}

// or
const [name] = (param: [type]): [type] => {
  return [return]
}
```

### 在线运行代码生成

> 完全依托于 `*.exam.ts` 文件的内容  
> 生成函数内部已经处理了关于工具库的内部引入  
> 同时支持 `console.log` 和 `return` 两种方式  
> 详细的处理代码可以在 `vitepress-plugin-nginx` 中查看  

#### `console.log` 方式
`randomString.exam.ts`
```ts
import { randomString } from '@vtrbo/utils/random'

console.log(randomString())
```

#### `return` 方式
`randomString.exam.ts`
```ts
import { randomString } from '@vtrbo/utils/random'

// 不出意外的话，这个地方 `eslint` 会报错
// 但是从生成规则上，支持这些写法的生成
// 更推荐 `console.log` 的方式
return randomString()
```

## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Victor Bo](https://github.com/vtrbo)
