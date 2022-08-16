import { expect, it } from 'vitest'
import { randomHex } from './randomHex'

it.skip('randomHex', () => {
  expect(randomHex()).toMatchInlineSnapshot('"#f04a20"')
})
