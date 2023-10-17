import path from 'node:path'
import process from 'node:process'
import chokidar from 'chokidar'
import { log, setLogPrefix } from '../packages/log'
import { runCommand } from './utils'

function getFileRoot(filePath: string) {
  return filePath.split(/[\\/]/)[0]
}

function getPackageName(filePath: string) {
  return filePath.split(/[\\/]/)[1]
}

function runBuild() {
  const runnerState = new RunnerState()
  if (runnerState.value)
    return
  runnerState.value = true
  runCommand(`pnpm build`, process.cwd(), {
    silent: false,
  }).then(() => {
    log.success(`Build successfully.`)
    runnerState.value = false
    log.info('Ready for changes...')
  }).catch((err) => {
    log.error(`Failed to build.`)
    log.error(err)
    runnerState.value = false
  })
}

function runWatchBuild(packagePath: string) {
  const runnerState = new RunnerState()
  if (runnerState.value)
    return
  runnerState.value = true

  const packageRoot = path.resolve(process.cwd(), packagePath)
  runCommand(`pnpm build`, packageRoot, {
    silent: false,
  }).then(() => {
    log.success(`Build ${packagePath} successfully.`)
    runnerState.value = false
    log.info('Ready for changes...')
  }).catch((err) => {
    log.error(`Failed to build ${packagePath}.`)
    log.error(err)
    runnerState.value = false
  })
}

class RunnerState {
  static instance: RunnerState | null = null

  private _value: boolean

  constructor() {
    if (RunnerState.instance)
      return RunnerState.instance
    this._value = false
    RunnerState.instance = this
  }

  get value() {
    return this._value
  }

  set value(val) {
    this._value = val
  }
}

setLogPrefix('@vtrbo/utils: ')

chokidar
  .watch(['./packages'], {
    ignored: /(dist)|(node_modules)|(__test__)/,
  })
  .on('ready', () => runBuild())
  .on('change', (filePath) => {
    const fileRoot = getFileRoot(filePath)
    const packageName = getPackageName(filePath)
    const fullName = `${fileRoot}/${packageName}`
    if (fullName)
      runWatchBuild(fullName)
    else
      log.warn(`unexpected path ${filePath}`)
  })
