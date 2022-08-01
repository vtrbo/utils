/**
 * @description 转为字符串
 *
 * @function toString
 * @param { any } data
 * @returns { string }
 */
export const toString = (data: any): string => Object.prototype.toString.call(data)
