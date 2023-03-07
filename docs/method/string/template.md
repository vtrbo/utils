# Template

## Description
简易的模板替换

## Run Online

<RunCode :dependency="`
function template(str: string, ...args: any[]): string {
  return str.replace(/{(\d+)}/g, (match, key) => {
    const index = Number(key)
    if (Number.isNaN(index))
      return match
    return args[index]
  })
}`">

```ts
const temp = 'hello {0}, {1}, 达到了惊人的{2}个!'

console.log(console.log(template(temp, '@vtrbo/utils', '你收集的工具函数是最多的', 100)))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| str | 源数据 | string | - |
| args | 替换数据 | any | - |

</div>