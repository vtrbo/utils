/**
 * @description 非 undefined value
 *
 * @function notUndefined
 * @param { T | null } data
 * @returns { boolean }
 */
export function notUndefined<T>(data: T): data is Exclude<T, undefined> {
  return data !== undefined
}
