import { describe, expect, it } from 'vitest'
import { deepClone } from './deepClone'

describe('deepClone', () => {
  it('should clone primitives correctly', () => {
    expect(deepClone(1)).toEqual(1)
    expect(deepClone('foo')).toEqual('foo')
    expect(deepClone(null)).toEqual(null)
    expect(deepClone(undefined)).toEqual(undefined)
  })

  it('should clone arrays correctly', () => {
    const arr = [1, 'foo', { bar: true }]
    const clone = deepClone(arr)
    expect(clone).toEqual(arr)
    expect(clone).not.toBe(arr) // 检查引用是否相同
    expect(clone[2]).not.toBe(arr[2]) // 检查嵌套对象引用是否相同
  })

  it('should clone objects correctly', () => {
    const obj = { a: 1, b: 'foo', c: { d: true } }
    const clone = deepClone(obj)
    expect(clone).toEqual(obj)
    expect(clone).not.toBe(obj) // 检查引用是否相同
    expect(clone.c).not.toBe(obj.c) // 检查嵌套对象引用是否相同
  })

  it('should clone regular expressions correctly', () => {
    const regex = /foo/
    const clone = deepClone(regex)
    expect(clone).toEqual(regex)
    expect(clone).not.toBe(regex) // 检查引用是否相同
  })
})
