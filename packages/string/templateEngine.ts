/**
 * @description 简易的模板引擎
 *
 * @function templateEngine
 * @param { string } data - 源数据
 * @param { any } args - 替换数据
 * @returns { string } - 替换后的数据
 */
export function templateEngine(data: string, ...args: any[]): string {
  return data.replace(/{(\d+)}/g, (match, key) => {
    const index = Number(key)
    if (Number.isNaN(index))
      return match
    return args[index]
  })
}
