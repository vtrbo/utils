/**
 * @description 非 falsy
 *
 * @function notFalsy
 * @param { T } data
 * @returns { boolean }
 */
export function notFalsy<T>(data: T): data is NonNullable<T> {
  return Boolean(data)
}
