# String 函数库

## backslashToSlash

```ts
/**
 * @description 替换 \ 为 /
 *
 * @function backslashToSlash
 * @param { string } data - 源数据
 * @returns { string } - 替换后的数据
 */
```

## ensurePrefix

```ts
/**
 * @description 确保字符串前缀
 *
 * @function ensurePrefix
 * @param { string } prefix - 前缀
 * @param { string } data - 源数据
 * @returns { string } - 确保前缀的数据
 */
```

## ensureSuffix

```ts
/**
 * @description 确保字符串后缀
 *
 * @function ensureSuffix
 * @param { string } suffix - 后缀
 * @param { string } data - 源数据
 * @returns { string } - 确保后缀的数据
 */
```

## firstUpperCase

```ts
/**
 * @description 首字母大写
 *
 * @function firstUpperCase
 * @param { string } data - 源数据
 * @returns { string } - 大写后的数据
 */
```

## getLeft

```ts
/**
 * @description 取文本左边
 *
 * @function getLeft
 * @param { string } data - 欲取的全文本
 * @param { string } findData - 寻找的文本
 * @param { IOption } [options] - 配置项
 * @param { number } [options.findPosition = 0] - 配置项.开始寻找位置
 * @param { boolean } [options.diffCase = false] - 配置项.是否区分大小写
 * @param { boolean } [options.returnFind = false] - 配置项.是否返回寻找文本
 * @returns { string } - 左边的文本
 */
```

## getRight

```ts
/**
 * @description 取文本右边
 *
 * @function getRight
 * @param { string } data - 欲取的全文本
 * @param { string } findData - 寻找的文本
 * @param { IOption } [options] - 配置项
 * @param { number } [options.findPosition = 0] - 配置项.开始寻找位置
 * @param { boolean } [options.diffCase = false] - 配置项.是否区分大小写
 * @param { boolean } [options.returnFind = false] - 配置项.是否返回寻找文本
 * @returns { string } - 右边的文本
 */
```

## randomString

```ts
/**
 * @description 生成随机字符串
 *
 * @function randomString
 * @param { number } [size] - 长度
 * @param { string } [dict] - 字典库
 * @returns { string } - 生成的随机字符串
 */
```

## templateEngine

```ts
/**
 * @description 简易的模板引擎
 *
 * @function templateEngine
 * @param { string } data - 源数据
 * @param { any } args - 替换数据
 * @returns { string } - 替换后的数据
 */
```

## toString

```ts
/**
 * @description 转为字符串
 *
 * @function toString
 * @param { any } data - 源数据
 * @returns { string } - 转换后的数据
 */
```

