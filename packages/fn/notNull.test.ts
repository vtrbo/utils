import { describe, expect, it } from 'vitest'
import { notNull } from './notNull'

describe('notNull', () => {
  it('should return false for null value', () => {
    const value: string | null = null
    expect(notNull(value)).toBe(false)
  })

  it('should return true for non-null value', () => {
    const value: string | null = 'hello'
    expect(notNull(value)).toBe(true)
  })

  it('should return true for undefined value', () => {
    const value: string | undefined = undefined
    expect(notNull(value)).toBe(true)
  })

  it('should return true for non-null object value', () => {
    const value: { name: string } | null = { name: 'Tom' }
    expect(notNull(value)).toBe(true)
  })
})
