/**
 * @desc 获取数据的原始类型
 *
 * @func toRawType
 * @param { any } data - 欲获取类型的数据
 * @returns { string } 原始类型
 */
export function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}
