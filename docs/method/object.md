# Object 函数库

## deepMerge
```ts
/**
 * @description 深拷贝对象
 *
 * @function deepMerge
 * @param { T } target
 * @param { S[] } sources
 * @returns { DeepMerge<T, S> }
 */
```

## entries
```ts
/**
 * @description object entries
 *
 * @function entries
 * @param { T } object
 * @returns { [keyof T, T[keyof T]][] }
 */
```

## keys
```ts
/**
 * @description object keys
 *
 * @function keys
 * @param { T } object
 * @returns { (keyof T)[] }
 */
```

## map
```ts
/**
 * @description object map
 *
 * @function map
 * @param { Record<K, V> } object
 * @param { (key: K, value: V) => [NK, NV] | undefined } fn
 * @returns { boolean }
 */
```

## pick
```ts
/**
 * @description object pick
 *
 * @function pick
 * @param { O } object
 * @param { T[] } keys
 * @param { boolean } omitUndefined = false
 * @returns { Pick<O, T> }
 */
```

## hasOwn
```ts
/**
 * @description object 中是否存在 key
 *
 * @function hasOwn
 * @param { T } object
 * @param { PropertyKey } key
 * @returns { boolean }
 */
```

## keyIn
```ts
/**
 * @description object 中是否存在 key
 *
 * @function keyIn
 * @param { T } object
 * @param { any } key
 * @returns { boolean }
 */
```
