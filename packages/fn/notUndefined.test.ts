import { describe, expect, it } from 'vitest'
import { notUndefined } from './notUndefined'

describe('notUndefined', () => {
  it('should return false for undefined value', () => {
    const value: string | undefined = undefined
    expect(notUndefined(value)).toBe(false)
  })

  it('should return true for non-undefined value', () => {
    const value: string | undefined = 'hello'
    expect(notUndefined(value)).toBe(true)
  })

  it('should return true for null value', () => {
    const value: string | null = null
    expect(notUndefined(value)).toBe(true)
  })

  it('should return true for non-undefined object value', () => {
    const value: { name: string } | undefined = { name: 'Tom' }
    expect(notUndefined(value)).toBe(true)
  })
})
