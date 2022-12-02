/**
 * @description 替换 \ 为 /
 *
 * @function backslashToSlash
 * @param { string } data - 源数据
 * @returns { string } - 替换后的数据
 */
export const backslashToSlash = (data: string): string => data.replace(/\\/g, '/')
