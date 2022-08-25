/**
 * @description 格式化时间
 *
 * @function format
 * @param { Date } date - 日期时间
 * @param { string } pattern - 格式
 * @returns { string } - 格式化时间
 */
export function format(date: Date, pattern: string): string {
  const dateTime = new Date(date)
  const format = {
    YYYY: dateTime.getFullYear(),
    [pattern.includes('MM') ? 'MM' : 'M']: dateTime.getMonth() + 1,
    [pattern.includes('DD') ? 'DD' : 'D']: dateTime.getDate(),
    [pattern.includes('HH') ? 'HH' : 'H']: dateTime.getHours(),
    [pattern.includes('mm') ? 'mm' : 'm']: dateTime.getMinutes(),
    [pattern.includes('ss') ? 'ss' : 's']: dateTime.getSeconds(),
    W: dateTime.getDay(),
  }
  return pattern.replace(/YYYY|M+|D+|H+|m+|s+|W+/g, (key: string): string => {
    const value = format[key]
    if (key === 'W')
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    if (key.length === 2 && value < 10)
      return `0${value}`
    return `${value}`
  })
}
