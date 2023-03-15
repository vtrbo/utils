import { describe, expect, it } from 'vitest'
import { groupBy } from './groupBy'

describe('groupBy', () => {
  it('should group items by given condition', () => {
    // 定义分组条件
    const groupByCondition = (item: any) => item.type

    // 定义分组前的数据列表
    const list = [
      { type: 'fruit', name: 'apple' },
      { type: 'fruit', name: 'banana' },
      { type: 'vegetable', name: 'carrot' },
      { type: 'vegetable', name: 'spinach' },
      { type: 'meat', name: 'beef' },
    ]

    // 调用 groupBy 函数进行分组
    const result = groupBy(list, groupByCondition)

    // 验证分组后的数据是否正确
    expect(result).toEqual(
      new Map([
        ['fruit', [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }]],
        ['vegetable', [{ type: 'vegetable', name: 'carrot' }, { type: 'vegetable', name: 'spinach' }]],
        ['meat', [{ type: 'meat', name: 'beef' }]],
      ]),
    )
  })
})
