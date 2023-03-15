import { describe, expect, it } from 'vitest'
import { notNullish } from './notNullish'

describe('notNullish', () => {
  it('should return false for null value', () => {
    const value: string | null = null
    expect(notNullish(value)).toBe(false)
  })

  it('should return false for undefined value', () => {
    const value: string | undefined = undefined
    expect(notNullish(value)).toBe(false)
  })

  it('should return true for non-nullish value', () => {
    const value: string | null | undefined = 'hello'
    expect(notNullish(value)).toBe(true)
  })

  it('should return true for non-nullish object value', () => {
    const value: { name: string } | null | undefined = { name: 'Tom' }
    expect(notNullish(value)).toBe(true)
  })
})
