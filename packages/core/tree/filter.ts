// 配置类型
interface RequireOption {
  children: string
}

// 转换为非必须类型
type Options = Partial<RequireOption>

// 默认配置
const defaultOption: RequireOption = {
  children: 'children',
}

/**
 * @description 树结构筛选
 *
 * @function filter
 * @param { T[] } tree - 树结构数据
 * @param { (node: T) => boolean } callback - 判断条件
 * @param { Options } [options] - 配置选项
 * @param { string } [options.children] - 子代键名
 * @returns { string } - 列表
 */
export function filter<T>(tree: T[], callback: (node: T) => boolean, options: Options = defaultOption): T[] {
  const requireOptions: RequireOption = { ...defaultOption, ...options }

  const { children } = requireOptions

  return tree.map(node => ({ ...node })).filter((node) => {
    if (callback(node))
      return node

    if ((node as any)[children] && Array.isArray((node as any)[children]) && (node as any)[children].length)
      (node as any)[children] = filter((node as any)[children], callback, requireOptions)
    else
      (node as any)[children] = []

    return callback(node) || (node as any)[children].length
  })
}
