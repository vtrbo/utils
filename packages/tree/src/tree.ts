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
    list.splice(i + 1, 0, ...(treeToList((node as any)[children]) as any))
  }

  return list
}

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

export function findPaths<T>(tree: T[], callback: (node: T) => boolean, options?: {
  children?: string
  findAll?: boolean
}): Array<T[]> {
  const tOption = Object.assign({
    children: 'children',
    findAll: false,
  }, options || {})

  const { children, findAll } = tOption

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

export function findNodes<T>(tree: T[], callback: (node: T) => boolean, options?: {
  children?: string
  findAll?: boolean
}): T[] {
  const tOption = Object.assign({
    children: 'children',
    findAll: false,
  }, options || {})

  const { children, findAll } = tOption

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
