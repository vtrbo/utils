import { describe, expect, it } from 'vitest'
import { isHttps } from './isHttps'

describe('isHttps function', () => {
  it('should return true for https url', () => {
    expect(isHttps('https://www.example.com')).toBe(true)
  })

  it('should return false for http url', () => {
    expect(isHttps('http://www.example.com')).toBe(false)
  })
})
