# RandomString

## Description
生成随机字符串

## Run Online

<RunCode :dependency="`
function randomString(size?: number, dict?: string): string {
  size = size || 16
  dict = dict || 'vtrbo-zRsEQxkJMUHiDlpST74wG512nF0c6gB3uX8_K9qCOWLNjPaYmhAZVdyIfe'
  let id = ''
  let i = size
  const length = dict.length
  while (i--)
    id += dict[(Math.random() * length) | 0]
  return id
}`">

```ts
const size = 32
const dict = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'

console.log(randomString(size, dict))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 长度 | number | 16 |
| dict - 字典库 = 'vtrbo | zRsEQxkJMUHiDlpST74wG512nF0c6gB3uX8_K9qCOWLNjPaYmhAZVdyIfe' | string | - |

</div>