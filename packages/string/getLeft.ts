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
 * @description 取左边文本
 *
 * @function getLeft
 * @param { string } source - 源文本
 * @param { string } target - 目标文本
 * @param { Options } [option] - 配置项
 * @param { number } [option.startPosition = 0] - 配置项.开始寻找位置
 * @param { boolean } [option.matchCase = false] - 配置项.是否区分大小写
 * @param { boolean } [option.returnTarget = false] - 配置项.是否返回寻找文本
 * @returns { string } - 左边的文本
 */
export const getLeft = (
  source: string,
  target: string,
  option?: Options,
): string => {
  const tOption: Options = { ...defaultOption, ...(option || {}) }
  let tSource: string = source
  let tTarget: string = target

  // matchCase
  if (!tOption?.matchCase) {
    tSource = tSource.toLowerCase()
    tTarget = target.toLowerCase()
  }

  const position = tSource.indexOf(tTarget, tOption?.startPosition)

  // returnTarget
  return position !== -1
    ? source.substring(0, position + (tOption?.returnTarget ? target.length : 0))
    : ''
}

