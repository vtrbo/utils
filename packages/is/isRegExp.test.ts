import { expect, it } from 'vitest'
import { isRegExp } from './isRegExp'

it('isRegExp', () => {
  expect(isRegExp('/\d+/g')).toMatchInlineSnapshot('false')
  expect(isRegExp(/\d+/g)).toMatchInlineSnapshot('true')
})
