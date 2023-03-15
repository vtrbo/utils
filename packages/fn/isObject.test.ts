import { describe, expect, it } from 'vitest'
import { isObject } from './isObject'

describe('isObject', () => {
  it('should return true for objects', () => {
    expect(isObject({})).toEqual(true)
    expect(isObject({ a: 1, b: '2' })).toEqual(true)
    // eslint-disable-next-line no-new-object
    expect(isObject(new Object())).toEqual(true)
  })

  it('should return false for non-objects', () => {
    expect(isObject(undefined)).toEqual(false)
    expect(isObject(null)).toEqual(false)
    expect(isObject('')).toEqual(false)
    expect(isObject('abc')).toEqual(false)
    expect(isObject([])).toEqual(false)
    expect(isObject(123)).toEqual(false)
    expect(isObject(true)).toEqual(false)
    expect(isObject(false)).toEqual(false)
    expect(isObject(() => {})).toEqual(false)
  })
})
