import { describe, expect, it } from 'vitest'
import { noop } from './noop'

describe('noop', () => {
  it('should do nothing', () => {
    const result = noop()
    expect(result).toBeUndefined()
  })
})
