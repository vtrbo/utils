---
title: groupBy
lang: zh-CN
---

# groupBy

将数组根据条件函数分组

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

<demo example="arr/groupBy/basic.ts"></demo>

## 参数

| 名称   | 描述     | 类型                   | 必填  | 默认值 |
|------|--------|----------------------|-----|-----|
| list | 欲分组的数据 | `T[]`                | `是` | -   |
| fn   | 分组条件   | `(single: T) => any` | `是` | -   |

