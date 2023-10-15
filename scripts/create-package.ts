import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import ora from 'ora'
import { log, setLogPrefix } from '../packages/log'

setLogPrefix('@vtrbo/utils: ')
const packageName = process.argv[2]
const rootDir = process.cwd()
const packagesDir = `${rootDir}/packages`
const templateDir = `${packagesDir}/is`

log.info(`packageName => ${packageName}`)
createPackage().catch()

async function createPackage() {
  const packageBaseDir = `${packagesDir}/${packageName}`
  const packageSrcDir = `${packageBaseDir}/src`
  const packageTypesDir = `${packageSrcDir}/types`
  mkPackageDirs(packageBaseDir, packageSrcDir, packageTypesDir)
  await Promise.all([
    writeCore(),
    writePackageIndex(packageBaseDir),
    writePackageJson(packageBaseDir),
    writePackageTsup(packageBaseDir),
    writePackageSrcModule(packageSrcDir),
    writePackageSrcTypes(packageTypesDir),
  ])
  log.success(`${packageName} has been created successfully.`)
}

function mkPackageDirs(...dirs: fs.PathLike[]) {
  dirs.forEach(dir => fs.mkdirSync(dir))
}

async function writeCore() {
  const coreRoot = path.join(rootDir, 'packages', 'core')
  const coreIndexPath = `${coreRoot}/index.ts`
  const coreIndexAppendData = `export * from '@vtrbo/utils-${packageName}'\n`
  await appendFile(coreIndexPath, coreIndexAppendData)
}

async function writePackageIndex(packageRoot: string) {
  const packageIndexPath = `${packageRoot}/index.ts`
  const packageIndexWriteData = `export * from './src/types'
export * from './src/${packageName}'`
  await writeFile(packageIndexPath, packageIndexWriteData)
}

async function writePackageJson(packageRoot: string) {
  const packageJsonPath = `${packageRoot}/package.json`
  const templatePath = `${templateDir}/package.json`
  const templateData = fs.readFileSync(templatePath, { encoding: 'utf-8' })
  const packageJsonWriteData = templateData.replace('@vtrbo/utils-is', `@vtrbo/utils-${packageName}`)
  await writeFile(packageJsonPath, packageJsonWriteData)
}

async function writePackageTsup(packageRoot: string) {
  const packageTsupPath = `${packageRoot}/tsup.config.ts`
  const templatePath = `${templateDir}/tsup.config.ts`
  const packageTsupWriteData = fs.readFileSync(templatePath, { encoding: 'utf-8' })
  await writeFile(packageTsupPath, packageTsupWriteData)
}

async function writePackageSrcModule(packageSrcRoot: string) {
  const packageSrcModulePath = `${packageSrcRoot}/${packageName}.ts`
  const packageSrcModuleWriteData = ''
  await writeFile(packageSrcModulePath, packageSrcModuleWriteData)
}

async function writePackageSrcTypes(packageTypesRoot: string) {
  const packageSrcTypesPath = `${packageTypesRoot}/index.ts`
  const packageSrcTypesWriteData = ''
  await writeFile(packageSrcTypesPath, packageSrcTypesWriteData)
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
