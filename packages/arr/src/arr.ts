import { isArray } from '@vtrbo/utils-is'

export function toArray<T = any>(data?: T | T[]): T[] {
  data = data ?? []
  return isArray(data) ? data : [data]
}

export function groupBy<T = any>(list: T[], fn: (single: T) => any): Map<string, T[]> {
  const map = new Map<string, T[]>()
  list.forEach((s: T) => {
    const key = fn(s)
    map.set(key, map.get(key) || [])
    map.get(key)!.push(s)
  })
  return map
}
