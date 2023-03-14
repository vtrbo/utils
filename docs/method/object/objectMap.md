# ObjectMap

## Description
映射对象的键值并构建新的对象

## Run Online

<RunCode symbolize="object-map-L2rcjXw1" :language="ts" :dependency="`
function notNullish<T>(value: T | null | undefined): value is NonNullable<T> {
  return value != null
}
function objectMap<K extends string, V, NK = K, NV = V>(object: Record<K, V>, fn: (key: K, value: V) => [NK, NV] | undefined): Record<K, V> {
  return Object.fromEntries(
    Object.entries(object)
      .map(([k, v]) => fn(k as K, v as V))
      .filter(notNullish),
  )
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

console.log(objectMap(object, (k, v) => k === 'includes' ? [k, v] : undefined))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| object | 源对象 | Record<K, V> | - |
| fn | Map 函数 | (key: K, value: V) => [NK, NV] \| undefined | - |

</div>