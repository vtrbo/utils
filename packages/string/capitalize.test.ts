import { describe, expect, it } from 'vitest'
import { capitalize } from './capitalize'

describe('capitalize function', () => {
  it('should capitalize first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('world')).toBe('World')
  })

  it('should return empty string if input is empty', () => {
    expect(capitalize('')).toBe('')
  })

  it('should return same string if first character is already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello')
    expect(capitalize('World')).toBe('World')
  })
})
