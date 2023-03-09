import { capitalize } from './capitalize'

/**
 * @desc 转换成大驼峰或小驼峰写法
 *
 * @func toCamelCase
 * @param { string } str - 字符串
 * @param { boolean } isUpper - 是否为大驼峰 true大驼峰 false小驼峰 = false
 * @returns { string } 转换后的字符串
 */
export const toCamelCase = (str: string, isUpper: boolean = false): string => {
  const camelCase = str
    .replace(/^[-|_]+|[-|_]+$/g, '') // 以 - 或 _ 开头的 替换为 空
    .replace(/[-|_]+([a-z])/g, (_, key) => key.toUpperCase()) // 以 - 或 _ 连接的字符 转换为 大写
    .replace(/[-|_]+/g, '') // 替换所有 - 或 _ 为 空 防止出现 -[number] 或其他的情况
  return isUpper ? capitalize(camelCase) : camelCase
}
