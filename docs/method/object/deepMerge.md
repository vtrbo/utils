# DeepMerge

## Description
合并对象

## Run Online

<RunCode :dependency="`
function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}
function isType(data: any, type: string): boolean {
  return toRawType(data).toLowerCase() === type.toLowerCase()
}
function isObject(data: any): boolean {
  return isType(data, 'Object')
}
function isArray(data: any): boolean {
  return isType(data, 'Array')
}
function objectKeys<T extends object>(object: T): Array<\`\${keyof T & (string | number | boolean | null | undefined)}\`> {
  return Object.keys(object) as Array<\`\${keyof T & (string | number | boolean | null | undefined)}\`>
}
type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T
type DeepMerge<F, S> = MergeInsertions<{
  [K in keyof F | keyof S]: K extends keyof S & keyof F
    ? DeepMerge<F[K], S[K]>
    : K extends keyof S
      ? S[K]
      : K extends keyof F
        ? F[K]
        : never;
}>
function isMergableObject(object: any): object is Object {
  return isObject(object) && !isArray(object)
}
function deepMerge<T extends object = object, S extends object = T>(target: T, ...sources: (S | any)[]): DeepMerge<T, S> {
  if (!sources.length)
    return target as any
  const source = sources.shift()
  if (source === undefined)
    return target as any
  if (isMergableObject(target) && isMergableObject(source)) {
    objectKeys(source).forEach((key) => {
      if (isMergableObject(source[key])) {
        if (!(target as any)[key])
          (target as any)[key] = {}
        deepMerge((target as any)[key], source[key])
      }
      else {
        (target as any)[key] = source[key]
      }
    })
  }
  return deepMerge(target, ...sources)
}`">

```ts
const target = {
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

const source1 = {
  source1: 'string工具库',
  age1: 2,
  extend: [
    'toString',
    {
      name: 'toString',
    },
  ],
}

const source2 = {
  source2: 'string工具库',
  age2: 2,
  extend: [
    'toString',
    {
      name: 'toString',
    },
  ],
}

console.log(deepMerge(target, source1, source2))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | 目标对象 | T | - |
| sources | 合并的对象 | (S \| any)[] | - |

</div>