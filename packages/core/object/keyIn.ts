/**
 * @description object 中是否存在 key
 *
 * @function keyIn
 * @param { T } object
 * @param { any } key
 * @returns { boolean }
 */
export function keyIn<T extends object>(object: T, key: keyof any): key is keyof T {
  return key in object
}
