// 配置类型
interface RequireOption {
  children: string
  findAll: boolean
}

// 转换为非必须类型
type Options = Partial<RequireOption>

// 默认配置
const defaultOption: RequireOption = {
  children: 'children',
  findAll: false,
}

/**
 * @description 树结构查找元素节点
 *
 * @function findNodes
 * @param { T[] } tree - 树结构数据
 * @param { (node: T) => boolean } callback - 判断条件
 * @param { Options } [options] - 配置选项
 * @param { string } [options.children] - 子代键名
 * @returns { T[] } - 符合条件的元素节点
 */
export function findNodes<T>(tree: T[], callback: (node: T) => boolean, options: Options = defaultOption): T[] {
  const requireOptions: RequireOption = { ...defaultOption, ...options }

  const { children, findAll } = requireOptions

  const list: T[] = [...tree]
  const nodes: T[] = []

  for (const node of list) {
    if (callback(node)) {
      nodes.push(node)
      if (!findAll)
        break
    }

    if ((node as any)[children] && Array.isArray((node as any)[children]) && (node as any)[children].length)
      list.push(...(node as any)[children])
  }

  return nodes
}
