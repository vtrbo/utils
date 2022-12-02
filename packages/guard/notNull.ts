/**
 * @description 非 null value
 *
 * @function notNull
 * @param { T | null } data
 * @returns { boolean }
 */
export function notNull<T>(data: T | null): data is Exclude<T, null> {
  return data !== null
}
