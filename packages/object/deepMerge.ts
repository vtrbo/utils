import { isObject } from '../fn/isObject'
import { isArray } from '../fn/isArray'
import { objectKeys } from './objectKeys'

type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T

type DeepMerge<F, S> = MergeInsertions<{
  [K in keyof F | keyof S]: K extends keyof S & keyof F
    ? DeepMerge<F[K], S[K]>
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
 * @desc 合并对象
 *
 * @func deepMerge
 * @param { T } target - 目标对象
 * @param { (S | any)[] } sources - 合并的对象
 * @returns { DeepMerge<T, S> } - 合并后的对象
 */
export function deepMerge<T extends object = object, S extends object = T>(target: T, ...sources: (S | any)[]): DeepMerge<T, S> {
  if (!sources.length)
    return target as any

  const source = sources.shift()
  if (source === undefined)
    return target as any

  if (isMergableObject(target) && isMergableObject(source)) {
    objectKeys(source).forEach((key) => {
      if (isMergableObject(source[key])) {
        if (!(target as any)[key])
          (target as any)[key] = {}
        deepMerge((target as any)[key], source[key])
      }
      else {
        (target as any)[key] = source[key]
      }
    })
  }

  return deepMerge(target, ...sources)
}
