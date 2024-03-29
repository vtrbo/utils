import colors from 'ansi-colors'
import type { LogType } from '../types'

const logPrefix = Symbol('')

export function setLogPrefix(prefix: string) {
  (globalThis as any)[logPrefix] = prefix
}

export function getLogPrefix() {
  return (globalThis as any)[logPrefix]
}

const logTypeFn = {
  success: (msg: string, prefix = '') => colors.greenBright.bold(`${prefix}${msg}`),
  error: (msg: string, prefix = '') => colors.redBright.bold(`${prefix}${msg}`),
  warn: (msg: string, prefix = '') => colors.yellowBright.bold(`${prefix}${msg}`),
  info: (msg: string, prefix = '') => colors.blueBright.bold(`${prefix}${msg}`),
}

function logFn(type: LogType, msg: string, prefix = (globalThis as any)[logPrefix]) {
  console.log(logTypeFn[type](msg, prefix))
}

logFn.success = (msg: string, prefix = (globalThis as any)[logPrefix]) => logFn('success', msg, prefix)
logFn.error = (msg: string, prefix = (globalThis as any)[logPrefix]) => logFn('error', msg, prefix)
logFn.warn = (msg: string, prefix = (globalThis as any)[logPrefix]) => logFn('warn', msg, prefix)
logFn.info = (msg: string, prefix = (globalThis as any)[logPrefix]) => logFn('info', msg, prefix)

export const log = logFn
