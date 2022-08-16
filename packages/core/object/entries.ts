/**
 * @description 对象的 Entries
 *
 * @function entries
 * @param { T } object - 源对象
 * @returns { [keyof T, T[keyof T]][] } - Entries
 */
export function entries<T extends object>(object: T): [keyof T, T[keyof T]][] {
  return Object.entries(object) as Array<[keyof T, T[keyof T]]>
}
