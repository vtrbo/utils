/**
 * @description 对象的 Keys
 *
 * @function keys
 * @param { T } object - 源对象
 * @returns { (keyof T)[] } - Keys
 */
export function keys<T extends object>(object: T): (keyof T)[] {
  return Object.keys(object) as Array<keyof T>
}
