import { describe, expect, it } from 'vitest'
import { isDate } from './isDate'

describe('isDate', () => {
  it('should check if value is date', () => {
    // 定义不同值和对应的布尔值
    const testData = [
      { value: new Date(), expected: true },
      { value: '2022-01-01', expected: false },
      { value: 1640995200000, expected: false },
      { value: {}, expected: false },
      { value: [], expected: false },
      { value: undefined, expected: false },
      { value: null, expected: false },
    ]

    // 对每个值进行测试
    for (const { value, expected } of testData)
      expect(isDate(value)).toEqual(expected)
  })
})
