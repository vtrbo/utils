/**
 * @desc 一次函数
 *
 * @func once
 * @param { (this: T, ...arg: A) => R } fn - 欲执行的函数
 * @returns { (this: T, ...arg: A) => R | undefined } - 执行函数 或 undefined
 */
export function once<A extends any[], R, T>(
  fn: (this: T, ...arg: A) => R,
): ((this: T, ...arg: A) => R | undefined) {
  let done = false
  return function (this: T, ...args: A) {
    return done ? undefined : ((done = true), fn.apply(this, args))
  }
}
