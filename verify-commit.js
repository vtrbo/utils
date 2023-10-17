import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = fs.readFileSync(msgPath, 'utf-8').trim()

const commitRE = /^(revert: )?(feat|fix|perf|refactor|test|types|docs|style|ci|build|release|workflow|dx|chore|wip|update|optimizate)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log('无效的提交')
  process.exit(1)
}
