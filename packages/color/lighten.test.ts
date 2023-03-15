import { describe, expect, it } from 'vitest'
import { lighten } from './lighten'

describe('lighten', () => {
  it('should lighten color by given level', () => {
    // 定义不同颜色值和对应变浅程度
    const testData = [
      { color: '#FFFFFF', level: 0, expected: '#ffffff' },
      { color: '#007AFF', level: 1, expected: '#1987ff' },
      { color: '#FF0000', level: 5, expected: '#ff7f7f' },
      { color: 'rgb(200, 100, 50)', level: 7, expected: 'rgb(238, 208, 193)' },
      { color: 'rgba(150, 150, 150, 0.5)', level: 9, expected: 'rgba(244, 244, 244, 0.5)' },
      { color: 'invalid-color', level: 3, expected: '' },
    ]

    // 对每个颜色进行测试
    for (const { color, level, expected } of testData)
      expect(lighten(color, level)).toEqual(expected)
  })
})
