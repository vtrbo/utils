/**
 * @desc 非 undefined 值
 *
 * @func notUndefined
 * @param { T } value - 欲校验的值
 * @returns { value is Exclude<T, undefined> } 校验结果
 */
export function notUndefined<T>(value: T): value is Exclude<T, undefined> {
  return value !== undefined
}
