/**
 * @desc 转换成短横线或下划线连接
 *
 * @func toLinesCase
 * @param { string } str - 字符串
 * @param { boolean } isUnder - 是否为下划线 true下划线 false短横线 = false
 * @returns { string } 转换后的字符串
 */
export function toLinesCase(str: string, isUnder: boolean = false): string {
  return str
    .replace(/^[-|_]+|[-|_]+$/g, '')
    .replace(/^[A-Z]/g, key => key.toLowerCase())
    .replace(/[A-Z]/g, key => `${isUnder ? '_' : '-'}${key.toLowerCase()}`)
}
