import type { Recordable } from '@vtrbo/utils-tool'
import { toRawType } from '@vtrbo/utils-tool'

export function isType(data: unknown, type: string): boolean {
  return toRawType(data).toLowerCase() === type.toLowerCase()
}

export function isString(data: unknown): data is string {
  return isType(data, 'string')
}

export function isNumber(data: unknown): data is number {
  return isType(data, 'number')
}

export function isNaN(data: unknown): data is number {
  return Number.isNaN(data)
}

export function isBoolean(data: unknown): data is boolean {
  return isType(data, 'boolean')
}

export function isTrue(data: unknown): data is true {
  return data === true
}

export function isFalse(data: unknown): data is false {
  return data === false
}

export function isSymbol(data: unknown): data is symbol {
  return isType(data, 'symbol')
}

export function isBigInt(data: unknown): data is bigint {
  return isType(data, 'bigint')
}

export function isObject<T extends Recordable = Recordable>(data: unknown): data is T {
  return isType(data, 'object')
}

export function isArray<T = any>(data: unknown): data is T[] {
  return isType(data, 'array')
}

export function isFunction<T extends Function = any>(data: unknown): data is T {
  return isType(data, 'function')
}

export function isPromise<T = any>(data: unknown): data is Promise<T> {
  return (
    !!data
    && isFunction((data as any).then)
    && isFunction((data as any).catch)
  )
}

export function isRegExp(data: unknown): data is RegExp {
  return isType(data, 'regexp')
}

export function isDate(data: unknown): data is Date {
  return isType(data, 'date')
}

export function isUndefined(data: unknown): data is undefined {
  return isType(data, 'undefined')
}

export function isNull(data: unknown): data is null {
  return isType(data, 'null')
}

export function isSet<T = any>(data: unknown): data is Set<T> {
  return isType(data, 'set')
}

export function isMap<K = any, V = any>(data: unknown): data is Map<K, V> {
  return isType(data, 'map')
}

export function isHttp(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://')
}

export function isLowerCase(str: string): boolean {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

export function isUpperCase(str: string): boolean {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

export function isMobile(mobile: string): boolean {
  const reg = /^1[3-9]\d{9}$/
  return reg.test(mobile)
}

export function isColor(color: string, type: 'HEX' | 'RGB' | 'RGBA'): boolean {
  const typeMap = {
    HEX: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/g,
    RGB: /^[rR][gG][bB][\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*,[\s]*){2}([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*){1}[\)]$/g,
    RGBA: /^[rR][gG][bB][aA][\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*,[\s]*){3}[\s]*(1|1.0|0|0.[0-9])[\s]*[\)]{1}$/g,
  }
  return typeMap[type].test(color)
}

export function isEmptyObj(object: unknown): boolean {
  return isObject(object) && Reflect.ownKeys(object).length === 0
}

export function isEmptyArr(array: unknown): boolean {
  return isArray(array) && !array.length
}

export function isKeyOfObj<T extends Recordable = Recordable>(object: T, k: keyof any): k is keyof T {
  return k in object
}

export function isLikeNumber(value?: unknown): boolean {
  return !Number.isNaN(+value!)
}

export function isLikeBoolean(value?: unknown): boolean {
  return value === 'true' || value === 'false' || value === true || value === false
}
