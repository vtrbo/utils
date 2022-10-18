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
 * @description 树结构转化为列表
 *
 * @function toList
 * @param { T[] } tree - 树结构数据
 * @param { Options } [options] - 配置选项
 * @param { string } [options.children] - 子代键名
 * @returns { string } - 列表
 */
export function toList<T>(tree: T[], options: Options = defaultOption): T[] {
  const requireOptions: RequireOption = { ...defaultOption, ...options }

  const { children } = requireOptions

  const list: T[] = [...tree]
  for (let i = 0; i < list.length; i++) {
    const node: T = list[i]
    if (!(node as any)[children])
      continue
    list.splice(i + 1, 0, ...(node as any)[children])
  }

  return list
}

