import { describe, expect, it } from 'vitest'
import { no } from './no'

describe('no', () => {
  it('should always return false', () => {
    const alwaysFalse = no()
    expect(alwaysFalse).toBe(false)
  })
})
