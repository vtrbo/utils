/**
 * @description object pick
 *
 * @function pick
 * @param { O } object
 * @param { T[] } keys
 * @param { boolean } omitUndefined = false
 * @returns { Pick<O, T> }
 */
export function pick<O, T extends keyof O>(object: O, keys: T[], omitUndefined: boolean = false): Pick<O, T> {
  return keys.reduce((n, k) => {
    if (k in object) {
      if (!omitUndefined || object[k] !== undefined)
        n[k] = object[k]
    }
    return n
  }, {} as Pick<O, T>)
}
