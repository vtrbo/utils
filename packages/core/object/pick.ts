import { keys as objectKeys } from './keys'

/**
 * @description object pick
 *
 * @function pick
 * @param { O } object
 * @param { T[] } keys
 * @returns { Pick<O, T> }
 */
export function pick<O, T extends keyof O>(object: O, keys: T[]): Pick<O, T> {
  return objectKeys(object as object).reduce((acc, key) => {
    return keys.includes(key) ? { ...acc, [key]: object[key] } : acc
  }, {} as Pick<O, T>)
}
