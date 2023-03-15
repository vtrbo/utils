import { describe, expect, it } from 'vitest'
import { isMap } from './isMap'

describe('isMap', () => {
  it('should return true if input is an instance of Map', () => {
    const map = new Map()
    expect(isMap(map)).toBe(true)
  })

  it('should return false if input is not an instance of Map', () => {
    const obj = {}
    expect(isMap(obj)).toBe(false)
  })
})
