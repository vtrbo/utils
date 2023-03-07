import { isObject } from '../fn/isObject'
import { isArray } from '../fn/isArray'
import { keys } from './keys'

type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T

type Merge<F, S> = MergeInsertions<{
  [K in keyof F | keyof S]: K extends keyof S & keyof F
    ? Merge<F[K], S[K]>
    : K extends keyof S
      ? S[K]
      : K extends keyof F
        ? F[K]
        : never;
}>

function isMergableObject(object: any): object is Object {
  return isObject(object) && !isArray(object)
}

/**
 * @description 合并对象
 *
 * @function merge
 * @param { T } target - 目标对象
 * @param { ...S } sources - 合并的对象
 * @returns { Merge<T, S> } - 合并后的对象
 */
export function merge<T extends object = object, S extends object = T>(target: T, ...sources: S[]): Merge<T, S> {
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
        merge((target as any)[key], (source as any)[key])
      }
      else {
        (target as any)[key] = source[key]
      }
    })
  }

  return merge(target, ...sources)
}
