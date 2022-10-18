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
 * @description 树结构查找元素路径
 *
 * @function findPaths
 * @param { T[] } tree - 树结构数据
 * @param { (node: T) => boolean } callback - 判断条件
 * @param { Options } [options] - 配置选项
 * @param { string } [options.children] - 子代键名
 * @returns { Array<T[]> } - 列表
 */
export function findPaths<T>(tree: T[], callback: (node: T) => boolean, options: Options = defaultOption): Array<T[]> {
  const requireOptions: RequireOption = { ...defaultOption, ...options }

  const { children, findAll } = requireOptions

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
        if (!findAll)
          break
      }
    }
  }

  return paths
}
