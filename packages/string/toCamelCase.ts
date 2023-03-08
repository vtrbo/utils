import { capitalize } from './capitalize'

/**
 * @desc 转换成驼峰
 *
 * @func toCamelCase
 * @param { string } str - 字符串
 * @param { boolean } isUpper - 是否为大驼峰 true大驼峰 false小驼峰 = false
 * @returns { string } 驼峰字符串
 */
export const toCamelCase = (str: string, isUpper: boolean = false): string => {
  const camelCase = str.replace(/-([a-z])/g, key => key.toUpperCase())
  return isUpper ? capitalize(camelCase) : camelCase
}
