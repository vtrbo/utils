import { isArray } from '../fn/isArray'
import { isObject } from '../fn/isObject'
import { isRegExp } from '../fn/isRegExp'

/**
 * @desc 复制数据
 *
 * @func clone
 * @param { T } target - 源数据
 * @returns { T } 复制之后的数据
 */
export function clone<T>(target: T): T {
  let cloneTarget: any = null
  if (isRegExp(target)) {
    cloneTarget = target
  }
  else if (isArray(target)) {
    cloneTarget = []
    for (const key in target)
      cloneTarget.push(clone(target[key]))
  }
  else if (isObject(target)) {
    cloneTarget = {}
    for (const key in target)
      cloneTarget[key] = clone(target[key])
  }
  else {
    cloneTarget = target
  }
  return cloneTarget as T
}
