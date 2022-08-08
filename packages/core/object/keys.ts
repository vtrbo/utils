/**
 * @description object keys
 *
 * @function keys
 * @param { T } object
 * @returns { (keyof T)[] }
 */
export function keys<T extends object>(object: T): (keyof T)[] {
  return Object.keys(object) as Array<keyof T>
}
