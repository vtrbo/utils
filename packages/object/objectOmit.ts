import { objectKeys } from './objectKeys'

/**
 * @desc 删除指定 keys 组装一个新的对象
 *
 * @func objectOmit
 * @param { O } object - 源对象
 * @param { T[] } keys - 键名
 * @returns { Omit<O, T> } 组成的对象
 */
export function objectOmit<O extends object, T extends keyof O>(object: O, keys: T[]): Omit<O, T> {
  return objectKeys(object as object).reduce((acc, key) => {
    return keys.includes(key) ? acc : { ...acc, [key]: object[key] }
  }, {} as Omit<O, T>)
}
