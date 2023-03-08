/**
 * @desc 严格类型的 `Object.entries`
 *
 * @func objectEntries
 * @param { T } object - 源对象
 * @returns { Array<[keyof T, T[keyof T]]> } Entries
 */
export function objectEntries<T extends object>(object: T): Array<[keyof T, T[keyof T]]> {
  return Object.entries(object) as Array<[keyof T, T[keyof T]]>
}
