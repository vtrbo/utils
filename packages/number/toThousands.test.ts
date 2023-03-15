import { describe, expect, it } from 'vitest'
import { toThousands } from './toThousands'

describe('toThousands', () => {
  it('should add thousand separators for a number', () => {
    expect(toThousands(1234)).toEqual('1,234')
    expect(toThousands(123456789)).toEqual('123,456,789')
    expect(toThousands(1000000, 2)).toEqual('1,000,000')
    expect(toThousands(123456.789, 2, true)).toEqual('123,456.79')
  })

  it('should add thousand separators for a string', () => {
    expect(toThousands('1234')).toEqual('1,234')
    expect(toThousands('123456789')).toEqual('123,456,789')
    expect(toThousands('1000000', 2)).not.to.equal('1,000,000.00')
    expect(toThousands('123456.789', 2, true)).toEqual('123,456.79')
  })

  it('should handle decimal parameter properly', () => {
    expect(toThousands(1234, 0)).toEqual('1,234')
    expect(toThousands(1234, 1)).toEqual('1,234')
    expect(toThousands(1234, 2)).toEqual('1,234')
    expect(toThousands(1234, 3)).toEqual('1,234')

    expect(toThousands(123456.789, 0, true)).toEqual('123,457')
    expect(toThousands(123456.789, 1, true)).toEqual('123,456.8')
    expect(toThousands(123456.789, 2, true)).toEqual('123,456.79')
    expect(toThousands(123456.789, 3, true)).toEqual('123,456.789')
  })

  it('should handle zeroize parameter properly', () => {
    expect(toThousands(1234, 2)).toEqual('1,234')
    expect(toThousands(1234, 2, true)).toEqual('1,234.00')
    expect(toThousands(1234, 3, true)).toEqual('1,234.000')
  })

  it('should return empty string for invalid input', () => {
    expect(toThousands(null)).toEqual('')
    expect(toThousands(undefined)).toEqual('')
    expect(toThousands('abc')).toEqual('')
    expect(toThousands(NaN)).toEqual('')
    expect(toThousands({})).toEqual('')
    expect(toThousands([])).toEqual('')
    expect(toThousands(true)).toEqual('')
    expect(toThousands(false)).toEqual('')
  })
})
