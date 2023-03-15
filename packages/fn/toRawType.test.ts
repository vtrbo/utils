import { describe, expect, it } from 'vitest'
import { toRawType } from './toRawType'

describe('toRawType', () => {
  it('should return correct type of data', () => {
    // 定义不同类型的数据
    const types = [
      { data: 'string', type: 'String' },
      { data: 123, type: 'Number' },
      { data: true, type: 'Boolean' },
      { data: [], type: 'Array' },
      { data: {}, type: 'Object' },
      { data: null, type: 'Null' },
      { data: undefined, type: 'Undefined' },
      { data: () => {}, type: 'Function' },
    ]

    // 对每种类型的数据进行测试
    for (const item of types) {
      const { data, type } = item
      expect(toRawType(data)).toBe(type)
    }
  })
})
