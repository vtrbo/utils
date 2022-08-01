/**
 * @description 提取数据原始类型
 *
 * @function toRawType
 * @param { any } data
 * @returns { string }
 */
export const toRawType = (data: any): string => Object.prototype.toString.call(data).slice(8, -1)

/**
 * @description 空函数
 *
 * @function NOOP
 */
export const NOOP = () => {}

/**
  * @description 永远返回 false 的函数
  *
  * @function NO
  */
export const NO = () => false
