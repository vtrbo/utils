/**
 * @description 转为字符串
 *
 * @function toString
 * @param { any } data - 源数据
 * @returns { string } - 转换后的数据
 */
export const toString = (data: any): string => Object.prototype.toString.call(data)
