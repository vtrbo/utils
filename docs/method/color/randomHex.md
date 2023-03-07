# RandomHex

## Description
生成随机 HEX 颜色

## Run Online

<RunCode :dependency="`
const randomHex = (): string => \`#\${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0')}\``">

```ts
console.log(randomHex())
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |


</div>