import { isString } from './isString'

/**
 * @description 是否为数字型字符串
 *
 * @function isIntegerString
 * @param { any } data - 欲校验的值
 * @returns { boolean } - 校验结果
 */
export const isIntegerString = (data: any): boolean => isString(data) && data !== 'NaN' && data[0] !== '-' && `${parseInt(data, 10)}` === data

