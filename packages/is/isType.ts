import { toRawType } from '../fn/toRawType'

/**
 * @description 是否是指定类型
 *
 * @function isType
 * @param { any } data - 欲校验的值
 * @param { string } type - 校验的类型
 * @returns { boolean } - 校验结果
 */
export const isType = (data: any, type: string): boolean => toRawType(data).toLowerCase() === type.toLowerCase()
