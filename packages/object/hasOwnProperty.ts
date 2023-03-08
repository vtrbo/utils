/**
 * @desc 确定对象是否具有具名的键
 *
 * @func hasOwnProperty
 * @param { T } object - 源对象
 * @param { PropertyKey } key - 键名
 * @returns { boolean } 校验结果
 *
 * @remark 为什么这样做
 * @see https://eslint.org/docs/latest/rules/no-prototype-builtins
 *
 * @remark hasOwnProperty 与 hasOwn 与 in 操作符的区别
 * @see https://javascript.plainenglish.io/in-vs-hasown-vs-hasownproperty-in-javascript-885771d2d100
 */
export function hasOwnProperty<T>(object: T, key: PropertyKey): boolean {
  if (object === null)
    return false
  return Object.prototype.hasOwnProperty.call(object, key)
}
