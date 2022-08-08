import type { DeepMerge } from '../types'
import { isObject } from '../is/isObject'
import { isArray } from '../is/isArray'
import { keys } from './keys'

/**
 * @description 深拷贝对象
 *
 * @function deepMerge
 * @param { T } target
 * @param { S[] } sources
 * @returns { DeepMerge<T, S> }
 */
export function deepMerge<T extends object = object, S extends object = T>(target: T, ...sources: S[]): DeepMerge<T, S> {
  if (!sources.length)
    return target as any

  const source = sources.shift()
  if (source === undefined)
    return target as any

  if (isMergableObject(target) && isMergableObject(source)) {
    keys(source).forEach((key) => {
      if (isMergableObject(source[key])) {
        if (!(target as any)[key])
          (target as any)[key] = {}
        deepMerge((target as any)[key], (source as any)[key])
      }
      else {
        (target as any)[key] = source[key]
      }
    })
  }

  return deepMerge(target, ...sources)
}

function isMergableObject(object: any): object is Object {
  return isObject(object) && !isArray(object)
}
