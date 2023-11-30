---
title: lighten
lang: zh-CN
---

# lighten

将颜色变浅

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

### 3/6位`HEX`颜色变浅

<demo example="color/lighten/hexToLighten.ts"></demo>

### `RGB`或`RGBA`颜色变浅

<demo example="color/lighten/rgbaToLighten.ts"></demo>

## 参数

| 名称    | 描述      | 类型       | 必填  | 默认值 |
|-------|---------|----------|-----|-----|
| color | 欲变浅的颜色值 | `string` | `是` | -   |
| level | 变浅级别    | `number` | `否` | 10  |
