import { describe, expect, it } from 'vitest'
import { rgbaToHex } from './rgbaToHex'

describe('rgbaToHex', () => {
  it('should convert rgba color to hex color', () => {
    // 定义不同 RGBA 颜色值和对应 HEX 颜色
    const testData = [
      { rgba: 'rgba(0, 0, 0, 1)', expected: '#000000ff' },
      { rgba: 'rgba(255, 0, 0, 0.5)', expected: '#ff00007f' },
      { rgba: 'rgba(0, 255, 0, 0.2)', expected: '#00ff0033' },
      { rgba: 'rgb(100, 100, 100)', expected: '#646464' },
      { rgba: '#123456', expected: '#123456' },
      { rgba: 'invalid-color', expected: '' },
    ]

    // 对每个颜色进行测试
    for (const { rgba, expected } of testData)
      expect(rgbaToHex(rgba)).toEqual(expected)
  })
})
