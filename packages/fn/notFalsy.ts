/**
 * @desc 非 falsy 值
 *
 * @func notFalsy
 * @param { T } value - 欲校验的值
 * @returns { value is NonNullable<T> } 校验结果
 */
export function notFalsy<T>(value: T): value is NonNullable<T> {
  return Boolean(value)
}
