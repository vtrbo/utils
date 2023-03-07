/**
 * @desc 是否存在键
 *
 * @func hasOwn
 * @param { T } object - 源对象
 * @param { PropertyKey } key - 键名
 * @returns { boolean } 校验结果
 */
export function hasOwn<T>(object: T, key: PropertyKey): boolean {
  if (object === null)
    return false
  return Object.prototype.hasOwnProperty.call(object, key)
}
