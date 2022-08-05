import fs from 'fs'
import fg from 'fast-glob'

/**
 * 生成入口文件主函数
 */
const generateEntries = async () => {
  const entries = await fg(['packages/core/**/*.ts', '!packages/core/*/entry.ts', '!packages/core/types.ts'])
  const files = await fg(['packages/*.ts'])

  files.forEach(f => fs.unlinkSync(f))

  let importContent = ''
  let exportContent = ''

  // 写模块导出
  const generate: string[] = []
  entries.forEach((f: string) => {
    const fsp = f.split('/')
    const mark = fsp[2]
    const path = fsp.slice(1, 3).join('/')

    if (!generate.includes(mark)) {
      generate.push(mark)
      if (writeModuleEntry({ mark, path })) {
        fs.writeFileSync(
          `packages/${mark}.ts`,
          `export * from './${path}/entry'\n`,
          {},
        )
        importContent += `import ${mark} from './${path}/entry'\n`
        exportContent += `\n  ${mark},`
      }
    }
  })

  // 写库导出
  fs.writeFileSync(
    'packages/index.ts',
    `${importContent}\n`
    + `export {${exportContent}\n}\n\n`
    + `export default {${exportContent}\n}\n`,
    {},
  )
}

/**
 * 写模块入口文件函数
 */
function writeModuleEntry(params: { mark: string; path: string }) {
  const { mark } = params
  const entries = fg.sync([`packages/core/${mark}/**/*.ts`, `!packages/core/${mark}/entry.ts`])

  // 写入口文件
  const entry = `packages/core/${mark}/entry.ts`
  fs.writeFileSync(
    entry,
    '',
    {},
  )

  const moduleExport: string[] = []
  entries.forEach((f: string): void => {
    // 读文件内容
    const data = fs.readFileSync(
      f,
      { encoding: 'utf-8' },
    )

    // 取出所有导出的函数名称
    const reg = /export.*?function(.*?)\(|export.*?(const|let|var)(.*?)=/g
    const fileExport = (data.match(reg) || [])
      .map(m => m.replace(reg, '$1$3').replace(/(.*?)<.*?>/g, '$1').trim())
      .sort((A, B) => A.localeCompare(B, 'zh-CN'))

    // 写单个文件函数的导入
    if ((fileExport || []).length) {
      const importContent = [...new Set(fileExport)].join(',\n  ')
      fs.appendFileSync(
        entry,
        `import {\n  ${importContent},\n} from './${f.replace(/packages\/core\/.*?\/(.*?).ts/g, '$1')}'\n\n`,
        {},
      )

      moduleExport.push(...fileExport)
    }
  })

  if ((moduleExport || []).length) {
    // 写入口文件函数的导出
    const exportContent = [...new Set(moduleExport)].join(',\n  ')
    fs.appendFileSync(
      entry,
      `export {\n  ${exportContent},\n}\n`
      + `\nexport default {\n  ${exportContent},\n}\n`,
      {},
    )
    return true
  }
  return false
}

generateEntries()
