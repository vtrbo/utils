# GetCenter

## Description
取中间文本

## Run Online

<RunCode symbolize="get-center-f6ju4W8m" :language="ts" :dependency="`
const getCenter = (
  source: string,
  before: string,
  after: string,
  options?: {
    findPosition?: number
    isMatchCase?: boolean
    isReturnFind?: boolean
  },
): string => {
  const tOption = Object.assign({
    findPosition: 0,
    isMatchCase: true,
    isReturnFind: false,
  }, options || {})
  let tSource: string = source
  let tBefore: string = before
  let tAfter: string = after
    if (!tOption.isMatchCase) {
    tSource = tSource.toLowerCase()
    tBefore = before.toLowerCase()
    tAfter = after.toLowerCase()
  }
  const beforePosition = tSource.indexOf(tBefore, tOption.findPosition)
  if (beforePosition === -1)
    return ''
  const afterPosition = tSource.indexOf(tAfter, beforePosition + before.length)
  if (afterPosition === -1)
    return ''
  return tOption.isReturnFind
    ? source.substring(beforePosition, afterPosition + after.length)
    : source.substring(beforePosition + before.length, afterPosition)
}`">

```ts
const sourceStr: string = 'hello @vtrbo/utils, 你是最棒的!'
const beforeStr: string = 'hello '
const afterStr: string = ', '

console.log(getCenter(sourceStr, beforeStr, afterStr))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| source | 源文本 | string | - |
| before | 前面文本 | string | - |
| after | 后面文本 | string | - |
| options.findPosition | 起始搜寻位置 | number | 0 |
| options.isMatchCase | 是否区分大小写 true区分 false不区分 | boolean | true |
| options.isReturnFind | 是否返回寻找文本 true返回 false不返回 | boolean | false |

</div>