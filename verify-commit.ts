import { readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { log } from './packages/core'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitKeys = 'feat|fix|perf|refactor|test|types|docs|style|ci|build|release|workflow|dx|chore|wip|update|optimizate'
const commitRE = new RegExp(`^(revert: )?(${commitKeys})(\\(.+\\))?: .{1,50}`)

if (!commitRE.test(msg)) {
  log.error('commit format error')
  log.error(commitKeys)
  process.exit(1)
}
