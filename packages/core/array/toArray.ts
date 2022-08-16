export type Arrayable<T> = T | Array<T>

export type Nullable<T> = T | null | undefined

/**
 * @description 转换为数组
 *
 * @function toArray<T>
 * @param { T | Array<T> } [data] - 欲转换的值
 * @returns { Array<T>  } - 数组
 */
export function toArray<T>(data?: Nullable<Arrayable<T>>): Array<T> {
  data = data || []
  if (Array.isArray(data))
    return data
  return [data]
}
