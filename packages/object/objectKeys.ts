/**
 * @desc 严格类型的 `Object.keys`
 *
 * @func objectKeys
 * @param { T } object - 源对象
 * @returns { Array<`${keyof T & (string | number | boolean | null | undefined)}`> } Keys
 */
export function objectKeys<T extends object>(object: T): Array<`${keyof T & (string | number | boolean | null | undefined)}`> {
  return Object.keys(object) as Array<`${keyof T & (string | number | boolean | null | undefined)}`>
}
