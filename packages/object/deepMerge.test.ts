import { describe, expect, it } from 'vitest'
import { deepMerge } from './deepMerge'

describe('deepMerge', () => {
  it('should merge objects correctly', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { b: 3, c: 4 }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: 1, b: 3, c: 4 })
  })

  it('should deep-merge nested objects correctly', () => {
    const obj1 = { a: { b: 1, c: 2 } }
    const obj2 = { a: { c: 3, d: 4 } }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: { b: 1, c: 3, d: 4 } })
  })

  it('should merge arrays correctly', () => {
    const arr1 = [1, 2]
    const arr2 = [3, 4]
    const result = deepMerge(arr1, arr2)
    expect(result).toEqual([1, 2])
  })

  it('should not merge non-matching types', () => {
    const str = 'foo'
    const num = 1
    const result = deepMerge(str as any, num)
    expect(result).toEqual('foo')
  })

  it('should handle null and undefined values correctly', () => {
    const obj1 = { a: 1 }
    const obj2 = null
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: 1 })

    const arr1 = [1, 2]
    const arr2 = undefined
    const result2 = deepMerge(arr1, arr2)
    expect(result2).toEqual([1, 2])
  })
})
