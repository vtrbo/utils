import { describe, expect, it } from 'vitest'
import { capitalize, ensurePrefix, ensureSuffix, template, toCamelCase, toEscape, toLinesCase, toSlash } from '../src/str'

describe('str', () => {
  it('capitalize', async () => {
    expect(capitalize('hello')).toEqual('Hello')
  })

  it('ensurePrefix', async () => {
    expect(ensurePrefix('/string/ensurePrefix', '/src')).toEqual('/src/string/ensurePrefix')
  })

  it('ensureSuffix', async () => {
    expect(ensureSuffix('/string/ensureSuffix', '/src')).toEqual('/string/ensureSuffix/src')
  })

  it('template', async () => {
    const tmp = 'hello {0}, {1}, 达到了惊人的{2}个!'
    expect(template(tmp, '@vtrbo/utils', '你收集的工具函数是最多的', 100)).toEqual('hello @vtrbo/utils, 你收集的工具函数是最多的, 达到了惊人的100个!')
  })

  it('toCamelCase', () => {
    const str1 = 'vtrbo-utils-string'
    const str2 = 'victor-bo--string'
    const str3 = '-victor-bo--string'
    const str4 = '-victor-bo--string-'
    const str5 = 'Victor-bo--string-'
    const str6 = '-Victor-bo--string-'
    const str7 = '7Victor-bo7--string-7'
    const str8 = '7_Victor-bo_7_-string-7'
    expect(toCamelCase(str1, true)).toEqual('VtrboUtilsString')
    expect(toCamelCase(str2, true)).toEqual('VictorBoString')
    expect(toCamelCase(str3, true)).toEqual('VictorBoString')
    expect(toCamelCase(str4, true)).toEqual('VictorBoString')
    expect(toCamelCase(str5, true)).toEqual('VictorBoString')
    expect(toCamelCase(str6, true)).toEqual('VictorBoString')
    expect(toCamelCase(str7, true)).toEqual('7VictorBo7String7')
    expect(toCamelCase(str8, true)).toEqual('7VictorBo7String7')
    expect(toCamelCase(str1, false)).toEqual('vtrboUtilsString')
    expect(toCamelCase(str2, false)).toEqual('victorBoString')
  })

  it('toLinesCase', () => {
    const str1 = 'vtrbo-utils-string'
    const str2 = 'Victor-bo--string'
    const str3 = 'victorBBoString'
    const str4 = 'VictorBBoString'
    const str5 = 'VictorBBoStringBoO'
    const str6 = '-VictorBBoStringBoO--'
    expect(toLinesCase(str1)).toEqual('vtrbo-utils-string')
    expect(toLinesCase(str2)).toEqual('victor-bo--string')
    expect(toLinesCase(str3, true)).toEqual('victor_b_bo_string')
    expect(toLinesCase(str4)).toEqual('victor-b-bo-string')
    expect(toLinesCase(str5, true)).toEqual('victor_b_bo_string_bo_o')
    expect(toLinesCase(str6)).toEqual('victor-b-bo-string-bo-o')
  })

  it('toSlash', () => {
    const filePath: string = '\hello\\vtrbo\\\string/toSlash\\\\'
    expect(toSlash(filePath)).toEqual('hello/vtrbo/string/toSlash//')
  })

  it('toEscape', () => {
    expect(toEscape('&')).toEqual('&amp;')
  })
})
