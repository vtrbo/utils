# GetLeft

## Description
取左边文本

## Run Online

<RunCode symbolize="get-left-bCd1AxMe" :language="ts" :dependency="`
const getLeft = (
  source: string,
  target: string,
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
  let tTarget: string = target
    if (!tOption.isMatchCase) {
    tSource = tSource.toLowerCase()
    tTarget = target.toLowerCase()
  }
  const position = tSource.indexOf(tTarget, tOption.findPosition)
  return position !== -1
    ? source.substring(0, position + (tOption.isReturnFind ? target.length : 0))
    : ''
}`">

```ts
const sourceStr: string = 'hello @vtrbo/utils, 你是最棒的!'
const targetStr: string = ', 你'

console.log(getLeft(sourceStr, targetStr))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| source | 源文本 | string | - |
| target | 目标文本 | string | - |
| options.findPosition | 起始搜寻位置 | number | 0 |
| options.isMatchCase | 是否区分大小写 true区分 false不区分 | boolean | true |
| options.isReturnFind | 是否返回寻找文本 true返回 false不返回 | boolean | false |

</div>