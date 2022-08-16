import { expect, it } from 'vitest'
import { randomHex } from './randomHex'

const isDev = (process.env.npm_lifecycle_script || '').includes('-u')

it.skipIf(isDev)('randomHex', () => {
  expect(randomHex()).toMatchInlineSnapshot('"#f04a20"')
})
