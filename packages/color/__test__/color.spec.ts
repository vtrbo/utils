import { describe, expect, it } from 'vitest'
import { darken, hexToRgba, lighten, rgbaToHex } from '../src/color'

describe('color', () => {
  it('rgbaToHex', () => {
    const testData = [
      { rgba: 'rgba(0, 0, 0, 1)', expected: '#000000ff' },
      { rgba: 'rgba(255, 0, 0, 0.5)', expected: '#ff00007f' },
      { rgba: 'rgba(0, 255, 0, 0.2)', expected: '#00ff0033' },
      { rgba: 'rgb(100, 100, 100)', expected: '#646464' },
      { rgba: '#123456', expected: '#123456' },
      { rgba: 'invalid-color', expected: '' },
    ]

    for (const { rgba, expected } of testData)
      expect(rgbaToHex(rgba)).toEqual(expected)
  })

  it('hexToRgba', () => {
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

    for (const { hex, expected } of testData)
      expect(hexToRgba(hex)).toEqual(expected)
  })

  it('lighten', () => {
    const testData = [
      { color: '#FFFFFF', level: 0, expected: '#ffffff' },
      { color: '#007AFF', level: 1, expected: '#1987ff' },
      { color: '#FF0000', level: 5, expected: '#ff7f7f' },
      { color: 'rgb(200, 100, 50)', level: 7, expected: 'rgb(238, 208, 193)' },
      { color: 'rgba(150, 150, 150, 0.5)', level: 9, expected: 'rgba(244, 244, 244, 0.5)' },
      { color: 'invalid-color', level: 3, expected: '' },
    ]

    for (const { color, level, expected } of testData)
      expect(lighten(color, level)).toEqual(expected)
  })

  it('darken', () => {
    const testData = [
      { color: '#FFFFFF', level: 0, expected: '#ffffff' },
      { color: '#007AFF', level: 1, expected: '#006de5' },
      { color: '#FF0000', level: 5, expected: '#7f0000' },
      { color: 'rgb(200, 100, 50)', level: 7, expected: 'rgb(60, 30, 15)' },
      { color: 'rgba(150, 150, 150, 0.5)', level: 9, expected: 'rgba(15, 15, 15, 0.5)' },
      { color: 'invalid-color', level: 3, expected: '' },
    ]

    for (const { color, level, expected } of testData)
      expect(darken(color, level)).toEqual(expected)
  })
})
