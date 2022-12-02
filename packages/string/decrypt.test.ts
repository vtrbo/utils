import { expect, it } from 'vitest'
import { decrypt } from './decrypt'

it('encrypt', () => {
  expect(decrypt('zsiz4W-Q0-WzRGozSLzJO')).toMatchInlineSnapshot('"我是加密的数据"')
})
