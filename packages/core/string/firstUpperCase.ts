/**
 * @description 首字母大写
 *
 * @function firstUpperCase
 * @param { string } data - 源数据
 * @returns { string } - 大写后的数据
 */
export const firstUpperCase = (data: string): string => data.charAt(0).toUpperCase() + data.slice(1)
