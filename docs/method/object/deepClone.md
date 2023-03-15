# DeepClone

## Description
复制数据

## Run Online

<RunCode :language="ts" :dependency="`
function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}
function isType(data: any, type: string): boolean {
  return toRawType(data).toLowerCase() === type.toLowerCase()
}
function isArray(data: any): data is any[] {
  return isType(data, 'Array')
}
function isObject(data: any): data is Record<any, any> {
  return isType(data, 'Object')
}
function isRegExp(data: any): data is RegExp {
  return isType(data, 'RegExp')
}
function deepClone<T>(target: T): T {
  let cloneTarget: any = null
  if (isRegExp(target)) {
    cloneTarget = new RegExp(target)
  }
  else if (isArray(target)) {
    cloneTarget = []
    for (const key in target)
      cloneTarget.push(deepClone(target[key]))
  }
  else if (isObject(target)) {
    cloneTarget = {}
    for (const key in target)
      cloneTarget[key] = deepClone(target[key])
  }
  else {
    cloneTarget = target
  }
  return cloneTarget as T
}`">

```ts
const object = {
  name: '@vtrbo/utils',
  fnNum: 100,
  isPublish: true,
  callback: () => {},
  extend: [
    'string',
    {
      array: ['toArray'],
    },
    [
      'isNumber',
      {
        name: 'toNumber',
      },
    ],
  ],
  includes: {
    name: 'object',
    fn: [
      'clone',
      {
        name: 'keys',
      },
    ],
  },
}

console.log(deepClone(object))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | 源数据 | T | - |

</div>