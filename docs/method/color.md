# Color 函数库

## colorDarken

```ts
/**
 * @description 加深颜色
 *
 * @function colorDarken
 * @param { string | number[] } color - 16进制颜色 | RGBA颜色
 * @param { number } level - 加深权重 0 - 10 0 自身 10 黑色
 * @returns { string | number[] } - HEX | [R, G, B, A]
 */
```

## colorLighten

```ts
/**
 * @description 变浅颜色
 *
 * @function colorLighten
 * @param { string | number[] } color - 16进制颜色 | RGBA颜色
 * @param { number } level - 加深权重 = 0 0 - 10 0 自身 10 白色
 * @param { 'HEX' | 'RGBA' } type - 返回类型 = 'HEX'
 * @returns { string | number[] } - HEX | [R, G, B, A]
 */
```

## hexToRgba

```ts
/**
 * @description HEX 转 RGBA
 *
 * @function hexToRgba
 * @param { string } hex - 16进制颜色
 * @returns { number[] } - [R, G, B, A]
 */
```

## randomHex

```ts
/**
 * @description 生成随机 HEX 颜色
 *
 * @function randomHex
 * @returns { string } - 16进制颜色
 */
```

## rgbaToHex

```ts
/**
 * @description RGBA 转 HEX
 *
 * @function rgbaToHex
 * @param { number[] } rgba - RGBA颜色
 * @returns { string } - 16进制颜色
 */
```

