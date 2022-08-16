export interface IOption {
  // 开始寻找位置
  startPosition?: number

  // 区分大小写
  matchCase?: boolean

  // 返回寻找文本
  returnTarget?: boolean
}

const defaultOption: IOption = {
  // 开始寻找位置
  startPosition: 0,

  // 区分大小写
  matchCase: false,

  // 返回寻找文本
  returnTarget: false,
}

/**
 * @description 取右边文本
 *
 * @function getRight
 * @param { string } source - 源文本
 * @param { string } target - 目标文本
 * @param { IOption } [option] - 配置项
 * @param { number } [option.startPosition = 0] - 配置项.开始寻找位置
 * @param { boolean } [option.matchCase = false] - 配置项.是否区分大小写
 * @param { boolean } [option.returnTarget = false] - 配置项.是否返回寻找文本
 * @returns { string } - 右边的文本
 */
export const getRight = (
  source: string,
  target: string,
  option?: IOption,
): string => {
  const tOption: IOption = { ...defaultOption, ...(option || {}) }
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
    ? source.substring(position + (!tOption?.returnTarget ? target.length : 0))
    : ''
}

