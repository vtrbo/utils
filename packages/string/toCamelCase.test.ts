import { expect, it } from 'vitest'
import { toCamelCase } from './toCamelCase'

const str1 = 'vtrbo-utils-string'
const str2 = 'victor-bo--string'
const str3 = '-victor-bo--string'
const str4 = '-victor-bo--string-'
const str5 = 'Victor-bo--string-'
const str6 = '-Victor-bo--string-'
const str7 = '7Victor-bo7--string-7'
const str8 = '7_Victor-bo_7_-string-7'

it('toCamelCase', () => {
  expect(toCamelCase(str1, true)).toMatchInlineSnapshot('"VtrboUtilsString"')
  expect(toCamelCase(str2, true)).toMatchInlineSnapshot('"VictorBoString"')
  expect(toCamelCase(str3, true)).toMatchInlineSnapshot('"VictorBoString"')
  expect(toCamelCase(str4, true)).toMatchInlineSnapshot('"VictorBoString"')
  expect(toCamelCase(str5, true)).toMatchInlineSnapshot('"VictorBoString"')
  expect(toCamelCase(str6, true)).toMatchInlineSnapshot('"VictorBoString"')
  expect(toCamelCase(str7, true)).toMatchInlineSnapshot('"7VictorBo7String7"')
  expect(toCamelCase(str8, true)).toMatchInlineSnapshot('"7VictorBo7String7"')
  expect(toCamelCase(str1, false)).toMatchInlineSnapshot('"vtrboUtilsString"')
  expect(toCamelCase(str2, false)).toMatchInlineSnapshot('"victorBoString"')
})
