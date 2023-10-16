import { isArray, isEmptyArr, isEmptyObj, isNull, isObject, isRegExp, isString, isUndefined } from '@vtrbo/utils-is'
import { notNullish } from '@vtrbo/utils-tool'
import type { DeepMerge, ObjEntriesReturnType, ObjKeysReturnType } from '../types'

export function objKeys<T extends object>(obj: T): ObjKeysReturnType<T> {
  return Object.keys(obj) as ObjKeysReturnType<T>
}

export function objEntries<T extends object>(obj: T): ObjEntriesReturnType<T> {
  return Object.entries(obj) as ObjEntriesReturnType<T>
}

export function objMap<K extends string, V, NK = K, NV = V>(object: Record<K, V>, fn: (key: K, value: V) => [NK, NV] | undefined): Record<K, V> {
  return Object.fromEntries(
    Object.entries(object)
      .map(([k, v]) => fn(k as K, v as V))
      .filter(notNullish),
  )
}

export function objPick<O extends object, T extends keyof O>(object: O, keys: T[]): Pick<O, T> {
  return objKeys(object as object).reduce((acc, key) => {
    return keys.includes(key) ? { ...acc, [key]: object[key] } : acc
  }, {} as Pick<O, T>)
}

export function objOmit<O extends object, T extends keyof O>(object: O, keys: T[]): Omit<O, T> {
  return objKeys(object as object).reduce((acc, key) => {
    return keys.includes(key) ? acc : { ...acc, [key]: object[key] }
  }, {} as Omit<O, T>)
}

export function clearKeys<T extends object>(obj: T, conditions = [undefined, null, 'udf', 'nul', 'ept', 'epto', 'epta']): T {
  conditions = conditions.map(condition => isString(condition) ? condition.trim() : condition)

  const clearUndefined = conditions.includes(undefined)
  const clearNull = conditions.includes(null)
  const clearUdf = conditions.includes('udf')
  const clearNul = conditions.includes('nul')
  const clearEpt = conditions.includes('ept')
  const clearEpto = conditions.includes('epto')
  const clearEpta = conditions.includes('epta')

  for (const key of objKeys<Record<any, any>>(obj)) {
    if (
      (clearUndefined && isUndefined(obj[key]))
      || (clearNull && isNull(obj[key]))
      || (clearUdf && isString(obj[key]) && obj[key].trim() === 'undefined')
      || (clearNul && isString(obj[key]) && obj[key].trim() === 'null')
      || (clearEpt && isString(obj[key]) && obj[key].trim() === '')
      || (clearEpto && isEmptyObj(obj[key]))
      || (clearEpta && isEmptyArr(obj[key]))
    )
      delete obj[key]
  }
  return obj
}

export function deepClone<T>(target: T): T {
  let cloneTarget: any = null
  if (isRegExp(target)) {
    cloneTarget = new RegExp(target)
  }
  else if (isArray(target)) {
    cloneTarget = []
    for (const key in target)
      cloneTarget.push(deepClone(target[key]))
  }
  else if (isObject(target)) {
    cloneTarget = {}
    for (const key in target)
      cloneTarget[key] = deepClone(target[key])
  }
  else {
    cloneTarget = target
  }
  return cloneTarget as T
}

export function deepMerge<T extends object = object, S extends object = T>(target: T, ...sources: S[]): DeepMerge<T, S> {
  if (!sources.length)
    return target as DeepMerge<T, S>

  const source = sources.shift()
  if (isUndefined(source))
    return target as DeepMerge<T, S>

  if (isObject(target) && isObject(source)) {
    objKeys(source).forEach((key: any) => {
      if (['__proto__', 'constructor', 'prototype'].includes(key))
        return

      if (isObject(source[key])) {
        if (!target[key])
          target[key] = {}
        if (isObject(target[key]))
          deepMerge(target[key], source[key])
        else
          target[key] = source[key]
      }
      else {
        target[key] = source[key]
      }
    })
  }

  return deepMerge(target, ...sources)
}
