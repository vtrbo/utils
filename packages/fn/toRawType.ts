/**
 * @desc 提取数据原始类型
 *
 * @func toRawType
 * @param { any } data - 欲提取的值
 * @returns { string } - 原始类型
 */
export const toRawType = (data: any): string => Object.prototype.toString.call(data).slice(8, -1)
