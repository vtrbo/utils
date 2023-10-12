# IsHttps

## Description
是否是https协议

## Run Online

<RunCode :language="ts" :dependency="`
function isHttps(url?: string): boolean {
  url = url || location.href.toString()
  return url.startsWith('https')
}`">

```ts
const url = 'https://utils.vtrbo.cn:80#randomString'

console.log(isHttps(url))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | url路径 | string | - |

</div>