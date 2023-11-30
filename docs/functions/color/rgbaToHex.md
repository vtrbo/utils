---
title: rgbaToHex
lang: zh-CN
---

# rgbaToHex

将`RGB`或`RGBA`颜色值转换为`HEX`颜色值

## 安装

::: code-group

```bash [pnpm]
pnpm add @vtrbo/utils-color
```

```bash [yarn]
yarn add @vtrbo/utils-color
```

```bash [npm]
npm install @vtrbo/utils-color
```

:::

## 使用

### RGBA 转 HEX

<demo example="color/rgbaToHex/rgbaToHex.ts"></demo>

### RGB 转 HEX

<demo example="color/rgbaToHex/rgbToHex.ts"></demo>

## 参数

| 名称   | 描述      | 类型       | 必填  | 默认值 |
|------|---------|----------|-----|-----|
| rgba | 欲转换的颜色值 | `string` | `是` | -   |
