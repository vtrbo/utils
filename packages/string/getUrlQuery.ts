import { getRight } from './getRight'

type ValueType = string | number | boolean | null | undefined

/**
 * @desc 获取 URL 参数
 * @param url { string } [url] - url路径 = 页面url
 * @param key { string } [key] - 参数名称
 * @returns { Record<string, ValueType> | ValueType } URL 参数
 */
export function getUrlQuery(url?: string, key?: string): Record<string, ValueType> | ValueType {
  url = url || location.href.toString()

  const query: Record<string, string | number | boolean | null | undefined> = {}
  const queryStr = getRight(url, '?')
  if (!queryStr)
    return key ? query[key] : query

  const queryArr = queryStr.split('&')

  queryArr.forEach((kv) => {
    if ((/=/g).test(kv)) {
      const [name, value] = kv.split('=')
      let val: ValueType = decodeURIComponent(value)
      val = (/\d+/g).test(val) ? +val : val
      val = ['true', 'false'].includes(val as string) ? val === 'true' : val
      val = ['', 'undefined'].includes(val as string) ? undefined : val
      val = ['null'].includes(val as string) ? null : val
      query[name] = val
    }
    else {
      query[kv] = true
    }
  })

  return key ? query[key] : query
}
