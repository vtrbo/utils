import { objKeys } from '@vtrbo/utils-obj'
import { toRawType } from '@vtrbo/utils-tool'

export function isType(data: any, type: string): boolean {
  return toRawType(data).toLowerCase() === type.toLowerCase()
}

export function isString(data: any): data is string {
  return isType(data, 'String')
}

export function isNumber(data: any): data is number {
  return isType(data, 'Number')
}

export function isBoolean(data: any): data is boolean {
  return isType(data, 'Boolean')
}

export function isObject(data: any): data is Record<any, any> {
  return isType(data, 'Object')
}

export function isArray(data: any): data is any[] {
  return isType(data, 'Array')
}

export function isFunction<T extends Function>(data: any): data is T {
  return isType(data, 'Function')
}

export function isRegExp(data: any): data is RegExp {
  return isType(data, 'RegExp')
}

export function isDate(data: any): data is Date {
  return isType(data, 'Date')
}

export function isUndefined(data: any): data is undefined {
  return isType(data, 'Undefined')
}

export function isNull(data: any): data is null {
  return isType(data, 'Null')
}

export function isSet(data: any): data is Set<any> {
  return isType(data, 'Set')
}

export function isMap(data: any): data is Map<any, any> {
  return isType(data, 'Map')
}

export function isHttp(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://')
}

export function isLowerCase(str: string) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

export function isUpperCase(str: string) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

export function isMobile(mobile: string) {
  const reg = /^1[3-9]\d{9}$/
  return reg.test(mobile)
}

export function isEmptyObj(obj: unknown): boolean {
  return isObject(obj) && !objKeys(obj).length
}

export function isEmptyArr(arr: unknown): boolean {
  return isArray(arr) && !arr.length
}

export function isKeyOfObj<T extends object>(obj: T, k: keyof any): k is keyof T {
  return k in obj
}
