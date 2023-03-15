import { isUndefined } from '../fn/isUndefined'
import { isNumber } from '../fn/isNumber'
import { isString } from '../fn/isString'

/**
 * @desc 增加千分位分割符
 *
 * @func toThousands
 * @param { any } data - 欲加千分位的数据
 * @param { number } [decimal] - 保留小数位数 undefined不处理小数位数 = undefined
 * @param { boolean } [zeroize] - 是否用零补位，只有开启了 `decimal` 才生效 true补位 false不补 = false
 * @returns { string } 符合条件的元素节点
 */
export function toThousands(
  data: any,
  decimal?: number,
  zeroize?: boolean,
): string {
  if (isNaN(data) || (!isString(data) && !isNumber(data)) || (!data && data !== 0))
    return ''

  let tData: string | number = +data

  if (isNaN(tData))
    return ''

  if (!isUndefined(decimal)) {
    decimal = Math.floor(decimal)
    tData = zeroize ? tData.toFixed(decimal) : +tData.toFixed(decimal)
  }

  const tDataArr = (`${tData}`).split('.')
  if (tDataArr.length > 2)
    return ''

  tData = (`${+tDataArr[0]}`).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (tDataArr[1] ? `.${tDataArr[1]}` : '')

  return tData
}
