import { expect, it } from 'vitest'
import { randomString } from './randomString'

it.skip('randomString', () => {
  expect(randomString()).toMatchInlineSnapshot('"R8yo0SgtuTuUPMbx"')
  expect(randomString(32)).toMatchInlineSnapshot('"bCzCYS4f6qyj2RPkYMRfpK1fApvwnSVr"')
  expect(randomString(32, 'abcdefg')).toMatchInlineSnapshot('"babcabceggbdbedeaeddbebcefaadfdd"')
})
