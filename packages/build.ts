import fs from 'fs'
import fg from 'fast-glob'

const exec = async () => {
  const entries = await fg(['packages/core/**/index.ts'])
  const files = await fg(['packages/*.ts', '!packages/build.ts'])

  files.forEach(f => fs.unlinkSync(f))

  const writeError = (error: NodeJS.ErrnoException | null) => {
    if (error)
      throw error
  }

  let importContent = ''
  let exportContent = ''

  // 写模块导出
  entries.forEach((f) => {
    const mark = f.replace(/packages\/core\/(.*?)\/index.ts/g, '$1')
    const path = f.replace(/packages\/(.*?)\/index.ts/g, '$1')
    fs.writeFile(
      `packages/${mark}.ts`,
      `export * from './${path}'\n`,
      {},
      writeError)
    importContent += `import ${mark} from './${path}'\n`
    exportContent += `\n  ${mark},`
  })

  // 写库导出
  fs.writeFile(
    'packages/index.ts',
    `${importContent}\n`
    + `export {${exportContent}\n}\n`
    + `export default {${exportContent}\n}\n`,
    {},
    writeError)
}

exec()
