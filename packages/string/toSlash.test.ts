import { expect, it } from 'vitest'
import { toSlash } from './toSlash'

const filePath: string = '\hello\\vtrbo\\\string/toSlash\\\\'

it('toSlash', () => {
  expect(toSlash(filePath)).toMatchInlineSnapshot('"hello/vtrbo/string/toSlash//"')
})
