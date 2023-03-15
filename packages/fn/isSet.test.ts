import { describe, expect, it } from 'vitest'
import { isSet } from './isSet'

describe('isSet', () => {
  it('should return true if input is an instance of Set', () => {
    const set = new Set()
    expect(isSet(set)).toBe(true)
  })

  it('should return false if input is not an instance of Set', () => {
    const obj = {}
    expect(isSet(obj)).toBe(false)
  })
})
