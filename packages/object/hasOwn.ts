/**
 * @description 对象中是否存在键
 *
 * @function hasOwn
 * @param { T } object - 源对象
 * @param { PropertyKey } key - 键名
 * @returns { boolean } - 是否存在
 */
export function hasOwn<T>(object: T, key: PropertyKey): boolean {
  if (object == null)
    return false
  return Object.prototype.hasOwnProperty.call(object, key)
}
