import { objectKeys } from './objectKeys'

/**
 * @desc 通过指定 keys 摘取一个新的对象
 *
 * @func objectPick
 * @param { O } object - 源对象
 * @param { T[] } keys - 键名
 * @returns { Pick<O, T> } 组成的对象
 */
export function objectPick<O extends object, T extends keyof O>(object: O, keys: T[]): Pick<O, T> {
  return objectKeys(object as object).reduce((acc, key) => {
    return keys.includes(key) ? { ...acc, [key]: object[key] } : acc
  }, {} as Pick<O, T>)
}
