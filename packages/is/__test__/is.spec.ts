import { describe, expect, it } from 'vitest'
import {
  isArray,
  isBoolean,
  isColor,
  isDate,
  isEmptyArr,
  isEmptyObj,
  isFunction,
  isHttp,
  isKeyOfObj,
  isLowerCase,
  isMap,
  isMobile,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isSet,
  isString,
  isType,
  isUndefined,
  isUpperCase,
} from '../src/is'

describe('is', () => {
  it('isType', async () => {
    expect(isType(123, 'number')).toBeTruthy()
    expect(isType('vtrbo', 'string')).toBeTruthy()
    expect(isType(false, 'boolean')).toBeTruthy()
    expect(isType(() => {}, 'function')).toBeTruthy()
    expect(isType(new Date('2023-10-01'), 'date')).toBeTruthy()
    expect(isType(/\d+/, 'regexp')).toBeTruthy()
  })

  it('isString', async () => {
    expect(isString('false')).toBeTruthy()
    expect(isString(true)).toBeFalsy()
  })

  it('isNumber', async () => {
    expect(isNumber(123)).toBeTruthy()
    expect(isNumber('123')).toBeFalsy()
  })

  it('isBoolean', async () => {
    expect(isBoolean(true)).toBeTruthy()
    expect(isBoolean('true')).toBeFalsy()
  })

  it('isObject', async () => {
    expect(isObject({})).toBeTruthy()
    expect(isObject({ foo: 'bar' })).toBeTruthy()
    expect(isObject([])).toBeFalsy()
    expect(isObject(null)).toBeFalsy()
    expect(isObject(undefined)).toBeFalsy()
  })

  it('isArray', async () => {
    expect(isArray([])).toBeTruthy()
    expect(isArray([null])).toBeTruthy()
    expect(isArray({})).toBeFalsy()
    expect(isArray(null)).toBeFalsy()
    expect(isArray(undefined)).toBeFalsy()
  })

  it('isFunction', async () => {
    expect(isFunction(() => {})).toBeTruthy()
    expect(isFunction(() => 1)).toBeTruthy()
  })

  it('isRegExp', async () => {
    expect(isRegExp(/\d+/)).toBeTruthy()
    expect(isRegExp(/\w+/g)).toBeTruthy()
    expect(isRegExp(new RegExp('\d'))).toBeTruthy()
    expect(isRegExp('\d')).toBeFalsy()
  })

  it('isDate', async () => {
    expect(isDate(new Date())).toBeTruthy()
    expect(isDate(new Date('2023-10-01'))).toBeTruthy()
    expect(isDate('2023-10-01')).toBeFalsy()
  })

  it('isUndefined', async () => {
    expect(isUndefined(undefined)).toBeTruthy()
    expect(isUndefined('undefined')).toBeFalsy()
    expect(isUndefined(null)).toBeFalsy()
  })

  it('isNull', async () => {
    expect(isNull(null)).toBeTruthy()
    expect(isNull('null')).toBeFalsy()
    expect(isNull(undefined)).toBeFalsy()
  })

  it('isSet', async () => {
    const mockSet = new Set()
    expect(isSet(mockSet)).toBeTruthy()
    expect(isSet({ foo: 'bar' })).toBeFalsy()
  })

  it('isMap', async () => {
    const mockMap = new Map()
    expect(isMap(mockMap)).toBeTruthy()
    expect(isMap({ foo: 'bar' })).toBeFalsy()
  })

  it('isHttp', async () => {
    expect(isHttp('http://vtrbo.cn')).toBeTruthy()
    expect(isHttp('https://vtrbo.cn')).toBeTruthy()
    expect(isHttp('udp://vtrbo.cn')).toBeFalsy()
  })

  it('isLowerCase', async () => {
    expect(isLowerCase('vtrbo')).toBeTruthy()
    expect(isLowerCase('VictorBo')).toBeFalsy()
  })

  it('isUpperCase', async () => {
    expect(isUpperCase('VTRBO')).toBeTruthy()
    expect(isUpperCase('VictorBo')).toBeFalsy()
  })

  it('isMobile', async () => {
    expect(isMobile('18934569876')).toBeTruthy()
    expect(isMobile('037166668888')).toBeFalsy()
  })

  it('isColor', async () => {
    expect(isColor('#fff', 'HEX')).toBe(true)
    expect(isColor('#F0f0F0', 'HEX')).toBe(true)
    expect(isColor('#12345678', 'HEX')).toBe(true)
    expect(isColor('#fgh', 'HEX')).toBe(false)
    expect(isColor('#1234', 'HEX')).toBe(true)
    expect(isColor('#123456789', 'HEX')).toBe(false)
    expect(isColor('rgb(255, 0, 0)', 'RGB')).toBe(true)
    expect(isColor('Rgb( 0,255,0 )', 'RGB')).toBe(true)
    expect(isColor('rgb( 0 , 0 , 255)', 'RGB')).toBe(true)
    expect(isColor('rgb(256, 0, 0)', 'RGB')).toBe(false)
    expect(isColor('rgba(0, 255, 0)', 'RGB')).toBe(false)
    expect(isColor('rgb(0, 0, 256)', 'RGB')).toBe(false)
    expect(isColor('rgba(255, 0, 0, 1)', 'RGBA')).toBe(true)
    expect(isColor('rgba(0, 255, 0, 0.5)', 'RGBA')).toBe(true)
    expect(isColor('rgba(0, 0, 255, 0.1)', 'RGBA')).toBe(true)
    expect(isColor('rgba(256, 0, 0)', 'RGBA')).toBe(false)
    expect(isColor('rgba(0, 255, 0, 1.5)', 'RGBA')).toBe(false)
    expect(isColor('rgba(0, 0, 256, 0)', 'RGBA')).toBe(false)
  })

  it('isEmptyObj', async () => {
    expect(isEmptyObj({})).toBeTruthy()
    expect(isEmptyObj({ foo: 'bar' })).toBeFalsy()
  })

  it('isEmptyArr', async () => {
    expect(isEmptyArr([])).toBeTruthy()
    expect(isEmptyArr([null])).toBeFalsy()
  })

  it('isKeyOfObj', async () => {
    const obj = { foo: 'bar' }
    expect(isKeyOfObj(obj, 'foo')).toBeTruthy()
    expect(isKeyOfObj(obj, 'name')).toBeFalsy()
  })
})
