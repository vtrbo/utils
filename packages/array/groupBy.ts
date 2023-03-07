/**
 * @desc 根据条件分组
 *
 * @func groupBy
 * @param { T[] } list - 欲分组的列表
 * @param { (single: T) => any } fn - 分组条件
 * @returns { Map<string, T[]> } 分组后的集合
 */
export function groupBy<T>(list: T[], fn: (single: T) => any): Map<string, T[]> {
  const map = new Map<string, T[]>()
  list.forEach((s: T) => {
    const key = fn(s)
    map.set(key, map.get(key) || [])
    map.get(key)!.push(s)
  })
  return map
}
