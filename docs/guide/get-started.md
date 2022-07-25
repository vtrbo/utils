## npm 安装
目前安装 @vtrbo/utils 的方式，只有一种，那就是使用 npm 安装。<br>
这里我推荐全局安装 [@vtrbo/ni](https://github.com/vtrbo/ni/)，它可以自动判断项目中的依赖锁文件，使用指定的管理器安装。
```shell
ni @vtrbo/utils

# or
npm install @vtrbo/utils
yarn add @vtrbo/utils
pnpm install @vtrbo/utils
```

## 使用
::: warning
并不是很推荐使用全部引入和模块引入，因为这将增大你的包体积。<br>
这里更推荐使用单个引入，这遵循了按需加载的原则。
:::

## 全部引入
```js
import utils from '@vtrbo/utils'

// module 为模块名称 function 为方法名
// 比如：字符串模块的随机字符串方法
// utils.string.randomString()
utils.module.function()
```

## 模块引入
```js
// module 为模块名称
// 比如：字符串模块
// import { string } from '@vtrbo/utils'
// or
// import string from '@vtrbo/utils/string'
import { module } from '@vtrbo/utils'
// or
import module from '@vtrbo/utils/module'

// module 为模块 function 为方法名
// 比如：字符串模块的随机字符串方法
// string.randomString()
module.function()
```

## 单个引入
```js
// module 为模块 function 为方法名
// 比如：字符串模块的随机字符串方法
// import { randomString } from '@vtrbo/utils/string'
import { function } from '@vtrbo/utils/module'

// 比如：字符串模块的随机字符串方法
// randomString()
function()
```
