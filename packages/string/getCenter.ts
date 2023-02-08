type Options = {
  // 开始寻找位置
  startPosition?: number
  // 区分大小写
  matchCase?: boolean
  // 返回寻找文本
  returnTarget?: boolean
}

const defaultOption: Options = {
  // 开始寻找位置
  startPosition: 0,
  // 区分大小写
  matchCase: false,
  // 返回寻找文本
  returnTarget: false,
}

/**
 * @description 取中间文本
 *
 * @function getCenter
 * @param { string } source - 源文本
 * @param { string } before - 前面文本
 * @param { string } after - 后面文本
 * @param { Options } [option] - 配置项
 * @param { number } [option.startPosition = 0] - 配置项.开始寻找位置
 * @param { boolean } [option.matchCase = false] - 配置项.是否区分大小写
 * @param { boolean } [option.returnTarget = false] - 配置项.是否返回寻找文本
 * @returns { string } - 中间的文本
 */
export const getCenter = (
  source: string,
  before: string,
  after: string,
  option?: Options,
): string => {
  const tOption: Options = { ...defaultOption, ...(option || {}) }
  let tSource: string = source
  let tBefore: string = before
  let tAfter: string = after

  // matchCase
  if (!tOption?.matchCase) {
    tSource = tSource.toLowerCase()
    tBefore = before.toLowerCase()
    tAfter = after.toLowerCase()
  }

  const beforePosition = tSource.indexOf(tBefore, tOption?.startPosition)
  if (beforePosition === -1)
    return ''

  const afterPosition = tSource.indexOf(tAfter, beforePosition + before.length)
  if (afterPosition === -1)
    return ''

  // returnTarget
  return tOption?.returnTarget
    ? source.substring(beforePosition, afterPosition + after.length)
    : source.substring(beforePosition + before.length, afterPosition)
}
