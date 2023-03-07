/**
 * @desc 简易的模板替换
 *
 * @func template
 * @param { string } str - 源数据
 * @param { any } args - 替换数据
 * @returns { string } 替换后的数据
 */
export function template(str: string, ...args: any[]): string {
  return str.replace(/{(\d+)}/g, (match, key) => {
    const index = Number(key)
    if (Number.isNaN(index))
      return match
    return args[index]
  })
}
