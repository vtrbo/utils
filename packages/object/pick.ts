import { keys as objectKeys } from './keys'

/**
 * @description 摘取对象键值
 *
 * @function pick
 * @param { O } object - 源对象
 * @param { T[] } keys - 取的 keys
 * @returns { Pick<O, T> } - 取出 keys 组成的对象
 */
export function pick<O, T extends keyof O>(object: O, keys: T[]): Pick<O, T> {
  return objectKeys(object as unknown as object).reduce((acc, key) => {
    return keys.includes(key) ? { ...acc, [key]: object[key] } : acc
  }, {} as Pick<O, T>)
}
