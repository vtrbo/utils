import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import process from 'node:process'
import ora from 'ora'
import type { Recordable } from '../packages/tool'
import { log, setLogPrefix } from '../packages/log'
import { runCommand } from './utils'

setLogPrefix('@vtrbo/utils: ')
const packageName = process.argv[2]
const rootDir = process.cwd()
const packagesDir = `${rootDir}/packages`
const templateDir = `${packagesDir}/is`
const requireModule = createRequire(import.meta.url)
const rootPackageJsonPath = `${rootDir}/package.json`

log.info(`packageName => ${packageName}`)
createPackage().catch()

async function createPackage() {
  const packageBaseDir = `${packagesDir}/${packageName}`
  const packageSrcDir = `${packageBaseDir}/src`
  const packageTypesDir = `${packageBaseDir}/types`
  mkPackageDirs(packageBaseDir, packageSrcDir, packageTypesDir)
  await Promise.all([
    writePackageJson(packageBaseDir),
    writePackageTsup(packageBaseDir),
    writePackageSrcModule(packageSrcDir),
    writePackageTypes(packageTypesDir),
    writePackageIndex(packageBaseDir),
    modifyCore(),
    modifyPackageJson(),
  ])

  await installDependencies()
  log.success(`${packageName} has been created successfully.`)
}

function mkPackageDirs(...dirs: fs.PathLike[]) {
  dirs.forEach(dir => fs.mkdirSync(dir))
}

async function writePackageJson(packageRoot: string) {
  const packageJsonPath = `${packageRoot}/package.json`
  const templatePath = `${templateDir}/package.json`
  const packageJsonWriteData = requireModule(templatePath)
  packageJsonWriteData.name = `@vtrbo/utils-${packageName}`
  await writeFile(packageJsonPath, JSON.stringify(packageJsonWriteData, null, 2))
}

async function writePackageTsup(packageRoot: string) {
  const packageTsupPath = `${packageRoot}/tsup.config.ts`
  const templatePath = `${templateDir}/tsup.config.ts`
  fs.copyFileSync(templatePath, packageTsupPath)
}

async function writePackageSrcModule(packageSrcRoot: string) {
  const packageSrcModulePath = `${packageSrcRoot}/${packageName}.ts`
  const packageSrcModuleWriteData = `export function fn() { 
  return ''
}\n`
  await writeFile(packageSrcModulePath, packageSrcModuleWriteData)
}

async function writePackageTypes(packageTypesRoot: string) {
  const packageTypesPath = `${packageTypesRoot}/index.ts`
  const packageTypesWriteData = 'export type Test = string\n'
  await writeFile(packageTypesPath, packageTypesWriteData)
}

async function writePackageIndex(packageRoot: string) {
  const packageIndexPath = `${packageRoot}/index.ts`
  const packageIndexWriteData = `export * from './types'
export * from './src/${packageName}'\n`
  await writeFile(packageIndexPath, packageIndexWriteData)
}

async function modifyCore() {
  const coreRoot = path.join(rootDir, 'packages', 'core')
  const coreIndexPath = `${coreRoot}/index.ts`
  const coreIndexAppendData = `export * from '@vtrbo/utils-${packageName}'\n`
  await appendFile(coreIndexPath, coreIndexAppendData)
}

async function modifyPackageJson() {
  const packageJsonCopy: Recordable = requireModule(rootPackageJsonPath)
  const depName = `@vtrbo/utils-${packageName}`
  if (depName in packageJsonCopy.dependencies) {
    log.error(`${depName} already exists in the package.json.`)
    process.exit(1)
  }
  packageJsonCopy.dependencies = Object.assign({}, packageJsonCopy.dependencies, { [`${depName}`]: 'workspace:*' })
  delete packageJsonCopy.peerDependencies
  await writeFile(rootPackageJsonPath, JSON.stringify(packageJsonCopy, null, 2))
}

async function installDependencies() {
  const spinner = ora('installing dependencies...').start()
  await runCommand(`pnpm install`).catch((err) => {
    spinner.fail(`Failed to install dependencies. Please try again.\n ${err}`)
  })
  spinner.clear()
  spinner.succeed('dependencies installed successfully.')
}

async function writeFile(path: fs.PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView) {
  const spinner = ora(`creating file: ${path}...`).start()
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, async (error) => {
      if (error) {
        spinner.fail(`failed to create file ${path}, rolling back operation.`)
        await rollback(error)
        reject(error)
        process.exit(1)
      }
      spinner.succeed(`file ${path} created successfully.`)
      resolve(null)
    })
  })
}

async function appendFile(path: fs.PathOrFileDescriptor, data: string | Uint8Array) {
  const spinner = ora(`creating file: ${path}...`).start()
  return new Promise((resolve, reject) => {
    fs.appendFile(path, data, async (error) => {
      if (error) {
        spinner.fail(`failed to append file ${path}, rolling back operation.`)
        await rollback(error)
        reject(error)
        process.exit(1)
      }
      spinner.succeed(`file ${path} append successfully.`)
      resolve(null)
    })
  })
}

async function rollback(error: NodeJS.ErrnoException) {
  log('error', `rollback err: ${error}`)
  process.exit(1)
}
