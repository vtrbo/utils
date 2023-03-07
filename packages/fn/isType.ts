import { toRawType } from './toRawType'

/**
 * @desc 是否是指定类型
 *
 * @func isType
 * @param { any } data - 欲校验的数据
 * @param { string } type - 校验的类型
 * @returns { boolean } 校验结果
 */
export function isType(data: any, type: string): boolean {
  return toRawType(data).toLowerCase() === type.toLowerCase()
}
