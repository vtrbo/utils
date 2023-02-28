/**
 * @description 根据条件分组
 *
 * @function groupBy
 * @param { T[] } list - 欲分组的列表
 * @callback { (single: T) => string } fn - 分组条件
 * @returns { T[]  } - 数组
 */
export function groupBy<T>(list: T[], fn: (single: T) => string): Map<string, T[]> {
  const map = new Map<string, T[]>()
  list.forEach((s: T) => {
    const key = fn(s)
    map.set(key, map.get(key) || [])
    map.get(key)!.push(s)
  })
  return map
}
