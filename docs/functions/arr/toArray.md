---
title: toArray
lang: zh-CN
---

# toArray

将数据转换为数组类型。

## 安装

::: code-group

```bash [pnpm]
pnpm add @vtrbo/utils-arr
```

```bash [yarn]
yarn add @vtrbo/utils-arr
```

```bash [npm]
npm install @vtrbo/utils-arr
```

:::

## 使用

- 不传入数据时，返回一个新的空数组。
- 传入数据不为数组时，返回一个包裹数据的数组。
- 传入数据为数组或元组时，直接返回自身。

<demo example="arr/toArray/basic.ts"></demo>

## 参数

| 名称   | 描述     | 类型    | 必填  | 默认值 |
|------|--------|-------|-----|-----|
| data | 欲转换的数据 | `any` | `否` | -   |
