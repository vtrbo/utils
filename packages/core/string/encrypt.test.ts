import { expect, it } from 'vitest'
import { encrypt } from './encrypt'

it('encrypt', () => {
  expect(encrypt('我是加密的数据')).toMatchInlineSnapshot('"zsiz4W-Q0-WzRGozSLzJO"')
})
