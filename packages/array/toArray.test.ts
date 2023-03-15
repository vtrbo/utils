import { describe, expect, it } from 'vitest'
import { toArray } from './toArray'

describe('toArray', () => {
  it('should convert value to array', () => {
    // 定义不同类型的数据
    const data = [
      { value: 1, expected: [1] },
      { value: 'test', expected: ['test'] },
      { value: [1, 2, 3], expected: [1, 2, 3] },
      { value: undefined, expected: [] },
      { value: null, expected: [] },
      { value: 0, expected: [] },
      { value: '', expected: [] },
    ]

    // 对每种类型的数据进行测试
    for (const item of data) {
      const { value, expected } = item
      expect(toArray(value)).toEqual(expected)
    }
  })
})
