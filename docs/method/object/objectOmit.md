# ObjectOmit

## Description
删除指定 keys 组装一个新的对象

## Run Online

<RunCode symbolize="object-omit-_-9_mRVj" :language="ts" :dependency="`
function objectKeys<T extends object>(object: T): Array<\`\${keyof T & (string | number | boolean | null | undefined)}\`> {
  return Object.keys(object) as Array<\`\${keyof T & (string | number | boolean | null | undefined)}\`>
}
function objectOmit<O extends object, T extends keyof O>(object: O, keys: T[]): Omit<O, T> {
  return objectKeys(object as object).reduce((acc, key) => {
    return keys.includes(key) ? acc : { ...acc, [key]: object[key] }
  }, {} as Omit<O, T>)
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

console.log(objectOmit(object, ['name', 'extend']))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| object | 源对象 | O | - |
| keys | 键名 | T[] | - |

</div>