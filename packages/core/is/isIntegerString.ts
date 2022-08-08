/**
 * @description 是否为数字型字符串
 *
 * @function isIntegerString
 * @param { any } data
 * @returns { boolean }
 */
export const isIntegerString = (data: any): boolean => isString(data) && data !== 'NaN' && data[0] !== '-' && `${parseInt(data, 10)}` === data

