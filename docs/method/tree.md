# Tree 函数库

## filter

```ts
/**
 * @description 树结构筛选
 *
 * @function filter
 * @param { T[] } tree - 树结构数据
 * @param { (node: T) => boolean } callback - 判断条件
 * @param { Options } [options] - 配置选项
 * @param { string } [options.children] - 子代键名
 * @returns { string } - 列表
 */
```

## findNodes

```ts
/**
 * @description 树结构查找元素节点
 *
 * @function findNodes
 * @param { T[] } tree - 树结构数据
 * @param { (node: T) => boolean } callback - 判断条件
 * @param { Options } [options] - 配置选项
 * @param { string } [options.children] - 子代键名
 * @returns { T[] } - 符合条件的元素节点
 */
```

## findPaths

```ts
/**
 * @description 树结构查找元素路径
 *
 * @function findPaths
 * @param { T[] } tree - 树结构数据
 * @param { (node: T) => boolean } callback - 判断条件
 * @param { Options } [options] - 配置选项
 * @param { string } [options.children] - 子代键名
 * @returns { Array<T[]> } - 列表
 */
```

## toList

```ts
/**
 * @description 树结构转化为列表
 *
 * @function toList
 * @param { T[] } tree - 树结构数据
 * @param { Options } [options] - 配置选项
 * @param { string } [options.children] - 子代键名
 * @returns { string } - 列表
 */
```

