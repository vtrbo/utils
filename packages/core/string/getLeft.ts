export interface IOption {
  findPosition?: number
  diffCase?: boolean
  returnFind?: boolean
}

const defaultOption: IOption = {
  findPosition: 0,
  diffCase: false,
  returnFind: false,
}

/**
 * @description 取文本左边
 *
 * @function getLeft
 * @param { string } data - 欲取的全文本
 * @param { string } findData - 寻找的文本
 * @param { IOption } [options] - 配置项
 * @param { number } [options.findPosition = 0] - 配置项.开始寻找位置
 * @param { boolean } [options.diffCase = false] - 配置项.是否区分大小写
 * @param { boolean } [options.returnFind = false] - 配置项.是否返回寻找文本
 * @returns { string } - 左边的文本
 */
export const getLeft = (
  data: string,
  findData: string,
  options?: IOption,
): string => {
  const tOptions = { ...defaultOption, ...(options || {}) }
  let tData: string = data

  // diffCase
  if (!tOptions?.diffCase)
    tData = tData.toLowerCase()

  // findPosition
  const position = tData.indexOf(findData, tOptions?.findPosition)

  // returnFind
  return position !== -1
    ? data.substring(0, position + (tOptions?.returnFind ? findData.length : 0))
    : ''
}

