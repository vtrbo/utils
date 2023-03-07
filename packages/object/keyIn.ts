/**
 * @desc 是否存在键
 *
 * @func keyIn
 * @param { T } object - 源对象
 * @param { PropertyKey } key - 键名
 * @returns { key is keyof T } 校验结果
 */
export function keyIn<T extends object>(object: T, key: PropertyKey): key is keyof T {
  return key in object
}
