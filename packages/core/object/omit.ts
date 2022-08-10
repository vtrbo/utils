import { keys as objectKeys } from './keys'

/**
 * @description object omit
 *
 * @function omit
 * @param { O } object
 * @param { T[] } keys
 * @returns { Omit<O, T> }
 */
export function omit<O, T extends keyof O>(object: O, keys: T[]): Omit<O, T> {
  return objectKeys(object as object).reduce((acc, key) => {
    return keys.includes(key) ? acc : { ...acc, [key]: object[key] }
  }, {} as Omit<O, T>)
}
