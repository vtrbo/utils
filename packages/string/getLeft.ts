/**
 * @desc 取左边文本
 *
 * @func getLeft
 * @param { string } source - 源文本
 * @param { string } target - 目标文本
 * @param { number } [options.findPosition] - 起始搜寻位置 = 0
 * @param { boolean } [options.isMatchCase] - 是否区分大小写 true区分 false不区分 = true
 * @param { boolean } [options.isReturnFind] - 是否返回寻找文本 true返回 false不返回 = false
 * @returns { string } 找到的左边文本
 */
export const getLeft = (
  source: string,
  target: string,
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
  let tTarget: string = target

  // 不区分大小写
  if (!tOption.isMatchCase) {
    tSource = tSource.toLowerCase()
    tTarget = target.toLowerCase()
  }

  const position = tSource.indexOf(tTarget, tOption.findPosition)

  return position !== -1
    ? source.substring(0, position + (tOption.isReturnFind ? target.length : 0))
    : ''
}
