/**
 * @desc 树结构转化为列表
 *
 * @func treeToList
 * @param { T[] } tree - 树结构数据
 * @param { string } [options.children] - 子代键名 = 'children'
 * @returns { string } 列表
 */
export function treeToList<T>(tree: T[], options?: {
  children?: string
}): T[] {
  const tOption = Object.assign({
    children: 'children',
  }, options || {})

  const { children } = tOption

  const list: T[] = [...tree]
  for (let i = 0; i < list.length; i++) {
    const node: T = list[i]
    if (!(node as any)[children])
      continue
    list.splice(i + 1, 0, ...(node as any)[children])
  }

  return list
}
