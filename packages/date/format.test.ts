import { describe, expect, it } from 'vitest'
import { format } from './format'

describe('format', () => {
  it('should format date time', () => {
    // 定义不同日期时间和对应格式
    const testData = [
      { date: new Date('2022-01-01 00:00:00'), pattern: 'YYYY年M月D日', expected: '2022年1月1日' },
      { date: new Date('2022-01-01 00:00:00'), pattern: 'YYYY-MM-DD HH:mm:ss', expected: '2022-01-01 00:00:00' },
      { date: new Date('2022-12-31 23:59:59'), pattern: 'W', expected: '六' },
      { date: new Date('2021-02-03'), pattern: 'MM/DD/YYYY', expected: '02/03/2021' },
    ]

    // 对每个日期时间进行测试
    for (const { date, pattern, expected } of testData)
      expect(format(date, pattern)).toEqual(expected)
  })
})
