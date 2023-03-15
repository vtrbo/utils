import { describe, expect, it } from 'vitest'
import { once } from './once'

describe('once', () => {
  it('should return a new function that can only be executed once', () => {
    // 定义一个计数器函数
    let count = 0
    const counterFn = () => {
      count += 1
      return count
    }

    // 对计数器函数进行 once 包装
    const onceFn = once(counterFn)

    // 执行一次
    expect(onceFn()).toEqual(1)

    // 再次执行
    expect(onceFn()).toBeUndefined()

    // 仅会执行一次
    expect(count).toEqual(1)
  })
})
