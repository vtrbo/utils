/**
 * @description 简易的模板引擎
 *
 * @function templateEngine
 * @param { string } data
 * @param { any } args
 * @returns { string }
 */
export function templateEngine(data: string, ...args: any[]): string {
  return data.replace(/{(\d+)}/g, (match, key) => {
    const index = Number(key)
    if (Number.isNaN(index))
      return match
    return args[index]
  })
}
