/**
 * @desc 树结构筛选
 *
 * @func treeFilter
 * @param { T[] } tree - 树结构数据
 * @param { (node: T) => boolean } callback - 判断条件
 * @param { string } [options.children] - 子代键名 = 'children'
 * @returns { string } 列表
 */
export function treeFilter<T>(tree: T[], callback: (node: T) => boolean, options?: {
  children?: string
}): T[] {
  const tOption = Object.assign({
    children: 'children',
  }, options || {})

  const { children } = tOption

  return tree.map(node => ({ ...node })).filter((node) => {
    if (callback(node))
      return node

    if ((node as any)[children] && Array.isArray((node as any)[children]) && (node as any)[children].length)
      (node as any)[children] = treeFilter((node as any)[children], callback, tOption)
    else
      (node as any)[children] = []

    return callback(node) || (node as any)[children].length
  })
}
