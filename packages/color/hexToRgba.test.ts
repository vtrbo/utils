import { describe, expect, it } from 'vitest'
import { hexToRgba } from './hexToRgba'

describe('hexToRgba', () => {
  it('should convert hex color to rgba color', () => {
    // 定义不同颜色值和对应 RGBA 格式
    const testData = [
      { hex: '#FFFFFF', expected: 'rgb(255, 255, 255)' },
      { hex: '#00FF00', expected: 'rgb(0, 255, 0)' },
      { hex: '#FF000099', expected: 'rgba(255, 0, 0, 0.6)' },
      { hex: '#123456', expected: 'rgb(18, 52, 86)' },
      { hex: 'invalid-color', expected: '' },
      { hex: '#cccc', expected: 'rgba(204, 204, 204, 0.8)' },
      { hex: 'rgb(0, 255, 0)', expected: 'rgb(0, 255, 0)' },
      { hex: 'rgba(0, 255, 0, 0.6)', expected: 'rgba(0, 255, 0, 0.6)' },
    ]

    // 对每个颜色进行测试
    for (const { hex, expected } of testData)
      expect(hexToRgba(hex)).toEqual(expected)
  })
})
