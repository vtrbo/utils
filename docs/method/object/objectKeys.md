# ObjectKeys

## Description
严格类型的 `Object.keys`

## Run Online

<RunCode symbolize="object-keys-gQULT1UG" :language="ts" :dependency="`
function objectKeys<T extends object>(object: T): Array<\`\${keyof T & (string | number | boolean | null | undefined)}\`> {
  return Object.keys(object) as Array<\`\${keyof T & (string | number | boolean | null | undefined)}\`>
}`">

```ts
const object = {
  name: '@vtrbo/utils',
  age: 2,
  fnNum: 100,
  isPublish: true,
}

console.log(objectKeys(object))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| object | 源对象 | T | - |

</div>