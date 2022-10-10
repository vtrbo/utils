import { isArray } from '../is/isArray'
import { isObject } from '../is/isObject'
import { isRegExp } from './../is/isRegExp'

/**
 * @description 复制数据
 *
 * @function clone
 * @param { T } target - 源数据
 * @returns { T } - copyTarget
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
