/**
 * @description 首字母大写
 *
 * @function firstUpperCase
 * @param { string } data
 * @returns { string }
 */
export const firstUpperCase = (data: string): string => data.charAt(0).toUpperCase() + data.slice(1)
