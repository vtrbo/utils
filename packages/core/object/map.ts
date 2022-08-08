import { notNullish } from '../guard/notNullish'

/**
 * @description object map
 *
 * @function map
 * @param { Record<K, V> } object
 * @param { (key: K, value: V) => [NK, NV] | undefined } fn
 * @returns { boolean }
 */
export function map<K extends string, V, NK = K, NV = V>(object: Record<K, V>, fn: (key: K, value: V) => [NK, NV] | undefined): Record<K, V> {
  return Object.fromEntries(
    Object.entries(object)
      .map(([k, v]) => fn(k as K, v as V))
      .filter(notNullish),
  )
}
