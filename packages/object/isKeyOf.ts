/**
 * @desc 确定对象是否具有具名的键，旨在约束 in 操作符中的键类型
 *
 * @func isKeyOf
 * @param { T } object - 源对象
 * @param { keyof any } key - 键名
 * @returns { key is keyof T } 校验结果
 *
 * @remark hasOwnProperty 与 hasOwn 与 in 操作符的区别
 * @see https://javascript.plainenglish.io/in-vs-hasown-vs-hasownproperty-in-javascript-885771d2d100
 */
export function isKeyOf<T extends object>(object: T, key: keyof any): key is keyof T {
  return key in object
}
