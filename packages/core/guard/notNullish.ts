/**
 * @description 非 nullish value
 *
 * @function notNullish
 * @param { T | null | undefined } data
 * @returns { boolean }
 */
export function notNullish<T>(data: T | null | undefined): data is NonNullable<T> {
  return data != null
}
