/**
 * @description 替换 \ 为 /
 *
 * @function backslashToSlash
 * @param { string } data
 * @returns { string }
 */
export const backslashToSlash = (data: string): string => data.replace(/\\/g, '/')
