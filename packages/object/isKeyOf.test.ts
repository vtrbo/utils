import { describe, expect, it } from 'vitest'
import { isKeyOf } from './isKeyOf'

describe('isKeyOf', () => {
  it('should return true for keys that exist in the object', () => {
    const obj = { a: 1, b: 'foo' }
    expect(isKeyOf(obj, 'a')).toBe(true)
    expect(isKeyOf(obj, 'b')).toBe(true)
  })

  it('should return false for keys that do not exist in the object', () => {
    const obj = { a: 1, b: 'foo' }
    expect(isKeyOf(obj, 'c')).toBe(false)
    expect(isKeyOf(obj, 'd')).toBe(false)
  })

  it('should only accept keys of type keyof T', () => {
    const obj = { a: 1, b: 'foo' }
    expect(isKeyOf(obj, 'c' as keyof typeof obj)).toBe(false)
    expect(isKeyOf(obj, 'a' as keyof typeof obj)).toBe(true)
  })
})
