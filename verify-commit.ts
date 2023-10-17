import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { log, setLogPrefix } from './packages/log'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = fs.readFileSync(msgPath, 'utf-8').trim()

const commitRE = /^(revert: )?(feat|fix|perf|refactor|test|types|docs|style|ci|build|release|workflow|dx|chore|wip|update|optimize)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  setLogPrefix('[GIT COMMIT] ')
  log.error('invalid commit message format')
  log.warn('Proper commit message format is required for automated changelog generation.')
  log.warn('Examples:')
  log.info('feat: added some feature')
  log.info('fix: fixed some error')
  log.info('keywords: feat|fix|perf|refactor|test|types|docs|style|ci|build|release|workflow|dx|chore|wip|update|optimize')
  process.exit(1)
}
