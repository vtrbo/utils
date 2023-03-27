# 为什么要做这个东西
## 介绍
[@vtrbo/utils](https://npmjs.com/package/@vtrbo/utils/) 是 [Victor Bo](https://github.com/vtrbo/) 的一个工具函数库。  
本着不重复造轮子的理念，库内包含的函数大多数为网络收集(标明的有出处)，当然也有部分是自己实现的。  

::: warning 别怪我没提示你，我自己其实在用  
@vtrbo/utils 目前处于开发和填充阶段，内部的函数可能会发生一些变化，以至于可能会产生一些副作用。  
当然，已经发布的函数基本上会处于一个比较稳定的状态，除非有一些特殊情况，比如出处的函数发生变化等。  
:::

## 动机
::: danger 比较危险的思想，要着重标出来  
单纯的就是我不想每次碰到一个函数，都要去百度或者其他地方复制一遍下来  
单纯的就是我不想每次写函数的时候，都去复制或者引入一个库增大包的体积  
单纯的...  
好吧，我承认，单纯的就是我懒  
:::

## 贡献
::: danger 重点说明  
1.所有的入口和文档均为生成的，请勿更改，不然你会知道什么叫做绝望  
2.请仔细阅读并深入理解关于 `*生成` 的内容，不然你会可爱我的  
3.就是凑个条数...  
:::

### 文档生成

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

### 入口生成

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
