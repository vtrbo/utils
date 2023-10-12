import { describe, expect, it } from 'vitest'
import { getUrlQuery } from './getUrlQuery'

describe('getUrlQuery', () => {
  it('should parse query params from URL', () => {
    const url = 'http://example.com/?foo=bar&baz=123&qux=true&undefinedKey=&nullKey=null&trueKey'
    const result = getUrlQuery(url)

    expect(result).toEqual({
      foo: 'bar',
      baz: 123,
      qux: true,
      undefinedKey: undefined,
      nullKey: null,
      trueKey: true,
    })
  })

  it('should return empty object if URL has no query params', () => {
    const url = 'http://example.com/'
    const result = getUrlQuery(url)

    expect(result).toEqual({})
  })

  it('should return value for specified key if it exists', () => {
    const url = 'http://example.com/?foo=bar&baz=123&qux=true'
    const key = 'baz'
    const result = getUrlQuery(url, key)

    expect(result).toBe(123)
  })

  it('should return undefined for specified key if it does not exist', () => {
    const url = 'http://example.com/?foo=bar&baz=123&qux=true'
    const key = 'nonexistent'
    const result = getUrlQuery(url, key)

    expect(result).toBeUndefined()
  })

  it('should return single value if only one query param is present', () => {
    const url = 'http://example.com/?foo=bar'
    const result = getUrlQuery(url)

    expect(result).toEqual({
      foo: 'bar',
    })
  })

  it('should handle number and boolean values correctly', () => {
    const url = 'http://example.com/?foo=123&bar=true&baz=false'
    const result = getUrlQuery(url)

    expect(result).toEqual({
      foo: 123,
      bar: true,
      baz: false,
    })
  })

  it('should handle empty query params correctly', () => {
    const url = 'http://example.com/?foo=&bar='
    const result = getUrlQuery(url)

    expect(result).toEqual({
      foo: undefined,
      bar: undefined,
    })
  })
})
