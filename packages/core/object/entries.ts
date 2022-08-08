/**
 * @description object entries
 *
 * @function entries
 * @param { T } object
 * @returns { [keyof T, T[keyof T]][] }
 */
export function entries<T extends object>(object: T): [keyof T, T[keyof T]][] {
  return Object.entries(object) as Array<[keyof T, T[keyof T]]>
}
