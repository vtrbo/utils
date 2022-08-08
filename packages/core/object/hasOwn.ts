/**
 * @description object 中是否存在 key
 *
 * @function hasOwn
 * @param { T } object
 * @param { PropertyKey } key
 * @returns { boolean }
 */
export function hasOwn<T>(object: T, key: PropertyKey): boolean {
  if (object == null)
    return false
  return Object.hasOwn(object, key)
}
