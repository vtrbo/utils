import type { Arrayable, Nullable } from '../../types'

/**
 * @description Arrayable<T> 转为 Array<T>
 *
 * @function toArray
 * @param { array } data?
 */
export function toArray<T>(data?: Nullable<Arrayable<T>>): Array<T> {
  data = data || []
  if (Array.isArray(data))
    return data
  return [data]
}
