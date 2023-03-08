/**
 * @desc 非 null 值
 *
 * @func notNull
 * @param { T | null } value - 欲校验的值
 * @returns { data is Exclude<T, null> } 校验结果
 */
export function notNull<T>(value: T | null): value is Exclude<T, null> {
  return value !== null
}
