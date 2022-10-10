# Object 函数库

## clone

```ts
/**
 * @description 复制数据
 *
 * @function clone
 * @param { T } target - 源数据
 * @returns { T } - copyTarget
 */
```

## entries

```ts
/**
 * @description 对象的 Entries
 *
 * @function entries
 * @param { T } object - 源对象
 * @returns { [keyof T, T[keyof T]][] } - Entries
 */
```

## hasOwn

```ts
/**
 * @description 对象中是否存在键
 *
 * @function hasOwn
 * @param { T } object - 源对象
 * @param { PropertyKey } key - 键名
 * @returns { boolean } - 是否存在
 */
```

## keyIn

```ts
/**
 * @description 对象中是否存在键
 *
 * @function keyIn
 * @param { T } object - 源对象
 * @param { any } key - 键名
 * @returns { boolean } - 是否存在
 */
```

## keys

```ts
/**
 * @description 对象的 Keys
 *
 * @function keys
 * @param { T } object - 源对象
 * @returns { (keyof T)[] } - Keys
 */
```

## map

```ts
/**
 * @description 对象的 Map
 *
 * @function map
 * @param { Record<K, V> } object - 源对象
 * @param { (key: K, value: V) => [NK, NV] | undefined } fn - Map 函数
 * @returns { Record<K, V> } - Map 后的对象
 */
```

## merge

```ts
/**
 * @description 合并对象
 *
 * @function merge
 * @param { T } target - 目标对象
 * @param { ...S } sources - 合并的对象
 * @returns { Merge<T, S> } - 合并后的对象
 */
```

## omit

```ts
/**
 * @description 剔除对象键值
 *
 * @function omit
 * @param { O } object - 源对象
 * @param { T[] } keys - 剔除的 keys
 * @returns { Omit<O, T> } - 剔除后的对象
 */
```

## pick

```ts
/**
 * @description 摘取对象键值
 *
 * @function pick
 * @param { O } object - 源对象
 * @param { T[] } keys - 取的 keys
 * @returns { Pick<O, T> } - 取出 keys 组成的对象
 */
```

