import { expect, it } from 'vitest'
import { toLinesCase } from './toLinesCase'

const str1 = 'vtrbo-utils-string'
const str2 = 'Victor-bo--string'
const str3 = 'victorBBoString'
const str4 = 'VictorBBoString'
const str5 = 'VictorBBoStringBoO'
const str6 = '-VictorBBoStringBoO--'

it('toLinesCase', () => {
  expect(toLinesCase(str1)).toMatchInlineSnapshot('"vtrbo-utils-string"')
  expect(toLinesCase(str2)).toMatchInlineSnapshot('"victor-bo--string"')
  expect(toLinesCase(str3, true)).toMatchInlineSnapshot('"victor_b_bo_string"')
  expect(toLinesCase(str4)).toMatchInlineSnapshot('"victor-b-bo-string"')
  expect(toLinesCase(str5, true)).toMatchInlineSnapshot('"victor_b_bo_string_bo_o"')
  expect(toLinesCase(str6)).toMatchInlineSnapshot('"victor-b-bo-string-bo-o"')
})
