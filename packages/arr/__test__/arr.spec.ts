import { describe, expect, it } from 'vitest'
import { groupBy, toArray } from '../src/arr'

describe('arr', () => {
  it('toArray', async () => {
    expect(toArray('vtrbo')).toEqual(['vtrbo'])
    expect(toArray(['utils'])).toEqual(['utils'])
    expect(toArray()).toEqual([])
  })

  it('groupBy', async () => {
    const list = [
      { type: 'fruit', name: 'apple' },
      { type: 'fruit', name: 'banana' },
      { type: 'vegetable', name: 'carrot' },
      { type: 'vegetable', name: 'spinach' },
      { type: 'meat', name: 'beef' },
    ]
    expect(groupBy(list, item => item.type)).toEqual(
      new Map([
        ['fruit', [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }]],
        ['vegetable', [{ type: 'vegetable', name: 'carrot' }, { type: 'vegetable', name: 'spinach' }]],
        ['meat', [{ type: 'meat', name: 'beef' }]],
      ]),
    )
  })
})
