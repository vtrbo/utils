---
title: darken
lang: zh-CN
---

# darken

将颜色加深

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

### 3/6位`HEX`颜色加深

<demo example="color/darken/hexToDarken.ts"></demo>

### `RGB`或`RGBA`颜色加深

<demo example="color/darken/rgbaToDarken.ts"></demo>

## 参数

| 名称    | 描述      | 类型       | 必填  | 默认值 |
|-------|---------|----------|-----|-----|
| color | 欲加深的颜色值 | `string` | `是` | -   |
| level | 加深级别    | `number` | `否` | 10  |
