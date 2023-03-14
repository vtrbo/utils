# ObjectPick

## Description
通过指定 keys 摘取一个新的对象

## Run Online

<RunCode symbolize="object-pick-QG7BC3Eq" :language="ts" :dependency="`
function objectKeys<T extends object>(object: T): Array<\`\${keyof T & (string | number | boolean | null | undefined)}\`> {
  return Object.keys(object) as Array<\`\${keyof T & (string | number | boolean | null | undefined)}\`>
}
function objectPick<O extends object, T extends keyof O>(object: O, keys: T[]): Pick<O, T> {
  return objectKeys(object as object).reduce((acc, key) => {
    return keys.includes(key) ? { ...acc, [key]: object[key] } : acc
  }, {} as Pick<O, T>)
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

console.log(objectPick(object, ['name', 'extend']))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| object | 源对象 | O | - |
| keys | 键名 | T[] | - |

</div>