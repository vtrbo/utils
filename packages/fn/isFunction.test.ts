import { describe, expect, it } from 'vitest'
import { isFunction } from './isFunction'

describe('isFunction', () => {
  it('should return true for functions', () => {
    expect(isFunction(() => {})).toEqual(true)
    // eslint-disable-next-line @typescript-eslint/space-before-function-paren, prefer-arrow-callback
    expect(isFunction(function() {})).toEqual(true)
    // eslint-disable-next-line no-new-func
    expect(isFunction(new Function())).toEqual(true)
  })

  it('should return false for non-functions', () => {
    expect(isFunction(undefined)).toEqual(false)
    expect(isFunction(null)).toEqual(false)
    expect(isFunction('')).toEqual(false)
    expect(isFunction('abc')).toEqual(false)
    expect(isFunction(123)).toEqual(false)
    expect(isFunction([])).toEqual(false)
    expect(isFunction({})).toEqual(false)
    expect(isFunction(true)).toEqual(false)
    expect(isFunction(false)).toEqual(false)
  })
})
