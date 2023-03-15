import { describe, expect, it } from 'vitest'
import { darken } from './darken'

describe('darken', () => {
  it('should darken color by given level', () => {
    // 定义不同颜色值和对应加深程度
    const testData = [
      { color: '#FFFFFF', level: 0, expected: '#ffffff' },
      { color: '#007AFF', level: 1, expected: '#006de5' },
      { color: '#FF0000', level: 5, expected: '#7f0000' },
      { color: 'rgb(200, 100, 50)', level: 7, expected: 'rgb(60, 30, 15)' },
      { color: 'rgba(150, 150, 150, 0.5)', level: 9, expected: 'rgba(15, 15, 15, 0.5)' },
      { color: 'invalid-color', level: 3, expected: '' },
    ]

    // 对每个颜色进行测试
    for (const { color, level, expected } of testData)
      expect(darken(color, level)).toEqual(expected)
  })
})
