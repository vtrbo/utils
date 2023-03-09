import { capitalize } from './capitalize'

/**
 * @desc 转换成大驼峰或小驼峰写法
 *
 * @func toCamelCase
 * @param { string } str - 字符串
 * @param { boolean } isUpper - 是否为大驼峰 true大驼峰 false小驼峰 = false
 * @returns { string } 转换后的字符串
 */
export function toCamelCase(str: string, isUpper: boolean = false): string {
  const camelCase = str
    .replace(/^[-|_]+|[-|_]+$/g, '')
    .replace(/[-|_]+([a-z])/g, (_, key) => key.toUpperCase())
    .replace(/[-|_]+/g, '')
  return isUpper ? capitalize(camelCase) : camelCase
}
