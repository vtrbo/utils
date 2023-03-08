import { notNullish } from '../fn/notNullish'

/**
 * @desc 映射对象的键值并构建新的对象
 *
 * @func objectMap
 * @param { Record<K, V> } object - 源对象
 * @param { (key: K, value: V) => [NK, NV] | undefined } fn - Map 函数
 * @returns { Record<K, V> } Map 后的对象
 */
export function objectMap<K extends string, V, NK = K, NV = V>(object: Record<K, V>, fn: (key: K, value: V) => [NK, NV] | undefined): Record<K, V> {
  return Object.fromEntries(
    Object.entries(object)
      .map(([k, v]) => fn(k as K, v as V))
      .filter(notNullish),
  )
}
