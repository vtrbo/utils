import { keys } from './keys'

/**
 * @description 剔除对象键值
 *
 * @function omit
 * @param { O } object - 源对象
 * @param { T[] } keyNames - 剔除的 keys
 * @returns { Omit<O, T> } - 剔除后的对象
 */
export function omit<O, T extends keyof O>(object: O, keyNames: T[]): Omit<O, T> {
  return keys(object as unknown as object).reduce((acc, key) => {
    return keyNames.includes(key) ? acc : { ...acc, [key]: object[key] }
  }, {} as Omit<O, T>)
}
