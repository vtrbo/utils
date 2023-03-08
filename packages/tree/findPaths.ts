/**
 * @desc 树结构查找元素路径
 *
 * @func findPaths
 * @param { T[] } tree - 树结构数据
 * @param { (node: T) => boolean } callback - 判断条件
 * @param { string } [options.children] - 子代键名 = 'children'
 * @param { string } [options.isFindAll] - 是否查找所有 true全部 false第一个满足条件的 = false
 * @returns { Array<T[]> } 符合条件的路径列表
 */
export function findPaths<T>(tree: T[], callback: (node: T) => boolean, options?: {
  children?: string
  isFindAll?: boolean
}): Array<T[]> {
  const tOption = Object.assign({
    children: 'children',
    isFindAll: false,
  }, options || {})

  const { children, isFindAll } = tOption

  const list: T[] = [...tree]
  const path: T[] = []
  const paths: Array<T[]> = []
  const records: Set<T> = new Set()

  while (list.length) {
    const node: T = list[0]
    if (records.has(node)) {
      path.pop()
      list.shift()
    }
    else {
      records.add(node);
      (node as any)[children] && list.unshift(...(node as any)[children])
      path.push(node)
      if (callback(node)) {
        paths.push([...path])
        if (!isFindAll)
          break
      }
    }
  }

  return paths
}
