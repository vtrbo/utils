/**
 * @desc 非 nullish 值
 *
 * @func notNullish
 * @param { T | null | undefined } value - 欲校验的值
 * @returns { value is NonNullable<T> } 校验结果
 */
export function notNullish<T>(value: T | null | undefined): value is NonNullable<T> {
  return value != null
}
