/**
 * @desc 取中间文本
 *
 * @func getCenter
 * @param { string } source - 源文本
 * @param { string } before - 前面文本
 * @param { string } after - 后面文本
 * @param { number } [options.findPosition] - 起始搜寻位置 = 0
 * @param { boolean } [options.isMatchCase] - 是否区分大小写 true区分 false不区分 = true
 * @param { boolean } [options.isReturnFind] - 是否返回寻找文本 true返回 false不返回 = false
 * @returns { string } 找到的中间文本
 */
export const getCenter = (
  source: string,
  before: string,
  after: string,
  options?: {
    findPosition?: number
    isMatchCase?: boolean
    isReturnFind?: boolean
  },
): string => {
  const tOption = Object.assign({
    findPosition: 0,
    isMatchCase: true,
    isReturnFind: false,
  }, options || {})

  let tSource: string = source
  let tBefore: string = before
  let tAfter: string = after

  // 不区分大小写
  if (!tOption.isMatchCase) {
    tSource = tSource.toLowerCase()
    tBefore = before.toLowerCase()
    tAfter = after.toLowerCase()
  }

  const beforePosition = tSource.indexOf(tBefore, tOption.findPosition)
  if (beforePosition === -1)
    return ''

  const afterPosition = tSource.indexOf(tAfter, beforePosition + before.length)
  if (afterPosition === -1)
    return ''

  return tOption.isReturnFind
    ? source.substring(beforePosition, afterPosition + after.length)
    : source.substring(beforePosition + before.length, afterPosition)
}
