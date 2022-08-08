import { toRawType } from '../fn/toRawType'
import { firstUpperCase } from '../string/firstUpperCase'

/**
 * @description 是否是指定类型
 *
 * @function isType
 * @param { any } data
 * @param { string } type
 * @returns { boolean }
 */
export const isType = (data: any, type: string): boolean => toRawType(data) === `${firstUpperCase(type.toLowerCase())}`
