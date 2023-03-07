/**
 * @desc 对象的 Entries
 *
 * @func entries
 * @param { T } object - 源对象
 * @returns { [keyof T, T[keyof T]][] } Entries
 */
export function entries<T extends object>(object: T): [keyof T, T[keyof T]][] {
  return Object.entries(object) as [keyof T, T[keyof T]][]
}
