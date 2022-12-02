/**
 * @description 对象中是否存在键
 *
 * @function keyIn
 * @param { T } object - 源对象
 * @param { any } key - 键名
 * @returns { boolean } - 是否存在
 */
export function keyIn<T extends object>(object: T, key: keyof any): key is keyof T {
  return key in object
}
