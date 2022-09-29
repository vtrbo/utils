/**
 * @description 根据条件分组
 *
 * @function groupBy
 * @param { Array<T> } list - 欲分组的列表
 * @callback { (single: T) => string | number } fn - 分组条件
 * @returns { Array<T>  } - 数组
 */
export function groupBy<T>(list: Array<T>, fn: (single: T) => string | number): Map<string | number, T[]> {
  const map = new Map<string | number, T[]>()
  list.forEach((route: T) => {
    const key = fn(route)
    map.set(key, map.get(key) || []);
    (map.get(key) as T[]).push(route)
  })
  return map
}
