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

## decrypt

```ts
/**
 * @description 字符串解密
 *
 * @function decrypt
 * @param { string } data - 欲解密数据
 * @param { string } salt - 盐
 * @returns { string } - 解密数据
 */
```

## encrypt

```ts
/**
 * @description 字符串加密
 *
 * @function encrypt
 * @param { string } data - 欲加密数据
 * @param { string } salt - 盐
 * @returns { string } - 加密数据
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

## getCenter

```ts
/**
 * @description 取中间文本
 *
 * @function getCenter
 * @param { string } source - 源文本
 * @param { string } before - 前面文本
 * @param { string } after - 后面文本
 * @param { IOption } [option] - 配置项
 * @param { number } [option.startPosition = 0] - 配置项.开始寻找位置
 * @param { boolean } [option.matchCase = false] - 配置项.是否区分大小写
 * @param { boolean } [option.returnTarget = false] - 配置项.是否返回寻找文本
 * @returns { string } - 中间的文本
 */
```

## getLeft

```ts
/**
 * @description 取左边文本
 *
 * @function getLeft
 * @param { string } source - 源文本
 * @param { string } target - 目标文本
 * @param { IOption } [option] - 配置项
 * @param { number } [option.startPosition = 0] - 配置项.开始寻找位置
 * @param { boolean } [option.matchCase = false] - 配置项.是否区分大小写
 * @param { boolean } [option.returnTarget = false] - 配置项.是否返回寻找文本
 * @returns { string } - 左边的文本
 */
```

## getRight

```ts
/**
 * @description 取右边文本
 *
 * @function getRight
 * @param { string } source - 源文本
 * @param { string } target - 目标文本
 * @param { IOption } [option] - 配置项
 * @param { number } [option.startPosition = 0] - 配置项.开始寻找位置
 * @param { boolean } [option.matchCase = false] - 配置项.是否区分大小写
 * @param { boolean } [option.returnTarget = false] - 配置项.是否返回寻找文本
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

