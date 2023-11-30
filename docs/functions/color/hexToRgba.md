---
title: hexToRgba
lang: zh-CN
---

# hexToRgba

将`HEX`颜色值转换为`RGB`或`RGBA`颜色值

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

### 3/6位`HEX`转换为`RGB`  

<demo example="color/hexToRgba/hexToRgb.ts"></demo>

### 4/8位`HEX`转换为`RGBA`  

<demo example="color/hexToRgba/hexToRgba.ts"></demo>

## 参数

| 名称  | 描述      | 类型       | 必填  | 默认值 |
|-----|---------|----------|-----|-----|
| hex | 欲转换的颜色值 | `string` | `是` | -   |
