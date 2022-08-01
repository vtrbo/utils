/**
 * @description 提取数据原始类型
 *
 * @function toRawType
 * @param { any } data
 * @returns { string }
 */
export const toRawType = (data: any): string => Object.prototype.toString.call(data).slice(8, -1)
