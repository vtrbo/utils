/**
 * @description 根据条件分组
 *
 * @function groupBy
 * @param { Array<T> } list - 欲分组的列表
 * @callback { (single: T) => string } fn - 分组条件
 * @returns { Array<T>  } - 数组
 */
export function groupBy<T>(list: Array<T>, fn: (single: T) => string): Map<string, T[]> {
  const map = new Map<string, T[]>()
  list.forEach((route: T) => {
    const key = fn(route)
    map.set(key, map.get(key) || []);
    (map.get(key) as T[]).push(route)
  })
  return map
}
