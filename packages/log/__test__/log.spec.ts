import { assert, beforeEach, describe, expect, it, vi } from 'vitest'
import colors from 'ansi-colors'
import { getLogPrefix, log, setLogPrefix } from '../src/log'

beforeEach(() => {
  setLogPrefix('')
})
describe('log', () => {
  it('log', () => {
    console.log = vi.fn()

    log('success', 'test message', '')
    expect(console.log).toHaveBeenCalledWith(colors.greenBright.bold('test message'))

    setLogPrefix('new prefix ')
    log('error', 'test message')
    expect(console.log).toHaveBeenCalledWith(colors.redBright.bold('new prefix test message'))

    log('warning', 'test message', 'custom prefix ')
    expect(console.log).toHaveBeenCalledWith(colors.yellowBright.bold('custom prefix test message'))

    log('info', 'test message')
    expect(console.log).toHaveBeenCalledWith(colors.blueBright.bold('new prefix test message'))
  })

  it('log type', () => {
    console.log = vi.fn()
    const msg = 'test message'
    const prefix = 'test prefix'

    setLogPrefix(prefix)
    log.success('test message')
    expect(console.log).toHaveBeenCalledWith(colors.greenBright.bold(`${prefix}${msg}`))

    log.error('test message')
    expect(console.log).toHaveBeenCalledWith(colors.redBright.bold(`${prefix}${msg}`))

    log.warning('test message')
    expect(console.log).toHaveBeenCalledWith(colors.yellowBright.bold(`${prefix}${msg}`))

    log.info('test message')
    expect(console.log).toHaveBeenCalledWith(colors.blueBright.bold(`${prefix}${msg}`))
  })

  it('setLogPrefix and getLogPrefix', () => {
    setLogPrefix('test')
    assert.equal(getLogPrefix(), 'test')
  })
})
