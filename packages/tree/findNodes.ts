/**
 * @desc 树结构查找元素节点
 *
 * @func findNodes
 * @param { T[] } tree - 树结构数据
 * @param { (node: T) => boolean } callback - 判断条件
 * @param { string } [options.children] - 子代键名 = 'children'
 * @param { string } [options.isFindAll] - 是否查找所有 true全部 false第一个满足条件的 = false
 * @returns { T[] } 符合条件的元素节点
 */
export function findNodes<T>(tree: T[], callback: (node: T) => boolean, options?: {
  children?: string
  isFindAll?: boolean
}): T[] {
  const tOption = Object.assign({
    children: 'children',
    isFindAll: false,
  }, options || {})

  const { children, isFindAll } = tOption

  const list: T[] = [...tree]
  const nodes: T[] = []

  for (const node of list) {
    if (callback(node)) {
      nodes.push(node)
      if (!isFindAll)
        break
    }

    if ((node as any)[children] && Array.isArray((node as any)[children]) && (node as any)[children].length)
      list.push(...(node as any)[children])
  }

  return nodes
}
