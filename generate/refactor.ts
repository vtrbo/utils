import fs from 'fs'
import fg from 'fast-glob'
import { firstUpperCase } from '../packages/string/firstUpperCase'

/**
 * 生成入口文件主函数
 */
const generateEntries = () => {
  // 读取函数文件
  const fnFiles = fg.sync([
    'packages/**/*.ts',
    '!packages/**/*.test.ts',
    '!packages/**/*.exam.ts',
    '!packages/**/*/types.ts',
    '!packages/index.ts',
    '!packages/*/index.ts',
  ])

  // 获取函数入口文件
  const fnEntries = fg.sync(['packages/*.ts'])
  // 移除函数入口文件
  fnEntries.forEach(f => fs.unlinkSync(f))

  // 获取文档侧边菜单文件
  const topic = fg.sync(['docs/.vitepress/sidebar.ts'])
  // 移除文档侧边菜单文件
  topic.forEach(f => fs.unlinkSync(f))

  // 入口文件导入导出内容
  let indexImport = ''
  let indexExport = ''

  // 侧边菜单写入内容
  const sidebarContent: {
    text: string
    collapsible: boolean
    items: {
      text: string
      link: string
    }[]
  }[] = []

  const pkWrote: string[] = []

  fnFiles.forEach((f: string) => {
    // 获取函数模块和路径
    const fsp = f.split('/')
    const mark = fsp[1]
    const path = fsp.slice(1, 2).join('/')

    if (!pkWrote.includes(mark)) {
      // 记录已经写过的模块
      pkWrote.push(mark)
      // 移除模块文档目录
      removeDir(`docs/method/${mark}`)
      // 创建模块文档目录
      fs.mkdirSync(`docs/method/${mark}`)
      const [status, sidebarItems] = writeModuleEntry({ mark, path })
      if (status) {
        sidebarContent.push({
          text: mark,
          collapsible: false,
          items: sidebarItems,
        })
        indexImport += `import ${mark} from './${path}'\n`
        indexExport += `\n  ${mark},`
      }
    }
  })

  // 写 packages/index.ts
  fs.writeFileSync(
    'packages/index.ts',
    `${indexImport}\n`
    + `export {${indexExport}\n}\n\n`
    + `export default {${indexExport}\n}\n`,
    {},
  )

  let exportTopic = 'export default [\n'
  const sidebar = sidebarContent.map((m) => {
    const { text, collapsible, items } = m
    const sidebarItems = items.map((im) => {
      const { text, link } = im
      return `      { text: '${text}', link: '${link}' }`
    })
    return `  {\n    text: '${firstUpperCase(text)}',\n    collapsible: ${collapsible},\n    items: ${sidebarItems.length ? `[\n${sidebarItems.join(',\n')},\n    ],\n` : '[],\n'}  }`
  })
  exportTopic += `${sidebar.join(',\n')},`
  exportTopic += '\n]\n'

  fs.writeFileSync(
    'docs/.vitepress/sidebar.ts',
    exportTopic,
    {},
  )
}

/**
 * 写模块入口文件函数
 */
function writeModuleEntry(params: { mark: string; path: string }): [boolean, { text: string; link: string }[]] {
  const { mark } = params
  // 模块包含的函数文件
  const fnFiles = fg.sync([
    `packages/${mark}/**/*.ts`,
    `!packages/${mark}/**/*.test.ts`,
    `!packages/${mark}/**/*.exam.ts`,
    `!packages/${mark}/**/*/types.ts`,
    `!packages/${mark}/*/index.ts`,
  ])

  // 创建模块入口文件
  const fnEntry = `packages/${mark}/index.ts`
  fs.writeFileSync(
    fnEntry,
    '',
    {},
  )

  const entryExport: string[] = []
  const sidebarItems: { text: string; link: string }[] = []

  fnFiles.forEach((f: string): void => {
    // 读函数文件内容
    const fnData = fs.readFileSync(
      f,
      { encoding: 'utf-8' },
    )

    // 取出所有导出的函数名称
    const fnNamesRegEx = /export function(.*?)(<|\()|export (const|let|var)(.*?)=/g
    const fnNameExport = (fnData.match(fnNamesRegEx) || []).map(m => m.replace(fnNamesRegEx, '$1$4').trim())

    // 写单个文件函数的导入
    if ((fnNameExport || []).length) {
      const fnNameImport = [...new Set(fnNameExport)]
        .sort((A, B) => A.localeCompare(B, 'zh-CN'))
        .join(',\n  ')

      const filePath = f.replace(/packages\/.*?\/(.*?).ts/g, '$1')

      fs.appendFileSync(
        fnEntry,
        `import {\n  ${fnNameImport},\n} from './${filePath}'\n\n`,
        {},
      )

      entryExport.push(...fnNameExport)
    }

    // 文档示例文件路径
    const exPath = f.replace('.ts', '.exam.ts')

    if (fs.existsSync(exPath)) {
      // 写方法文档
      const desc = fnData.replace(/[\S\s]*\* @desc (.*)\n \*[\S\s]*/g, '$1')
      const func = fnData.replace(/[\S\s]*\* @func (.*)\n \*[\S\s]*/g, '$1')
      const docPath = `docs/method/${mark}/${func}.md`
      fs.writeFileSync(
        docPath,
        `# ${firstUpperCase(func)}\n\n## Description\n${desc}\n\n`,
        {},
      )

      // 读文档示例文件内容
      const exData = fs.readFileSync(
        exPath,
        { encoding: 'utf-8' },
      )

      // 追加代码示例
      const jsCode = exData.replace(/import.*?from.*?\n/g, '').replace(fnNameExport[0], `return ${func}`)
      fs.appendFileSync(
        docPath,
        `## Run Online\n\n<RunCode>\n\n\`\`\`js\n${jsCode.trim()}\n\`\`\`\n\n</RunCode>\n\n`,
        {},
      )

      // 追加参数说明
      const paramsRegEx = /\* @param(\.option)? \{ (.*) \} (\[)?(.*)(\])? - (.*)/g
      const paramsTable = `## Options\n\n| 属性名 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n${(fnData.match(paramsRegEx) || []).map(m => m.replace(paramsRegEx, '| $4 | $6 | $2 | |')).join('\n')}`
      fs.appendFileSync(
        docPath,
        paramsTable,
        {},
      )

      sidebarItems.push({ text: func, link: `/method/${mark}/${func}` })
    }
  })

  if ((entryExport || []).length) {
    // 写入口文件函数的导出
    const exportContent = [...new Set(entryExport)]
      .sort((A, B) => A.localeCompare(B, 'zh-CN'))
      .join(',\n  ')

    fs.appendFileSync(
      fnEntry,
      `export {\n  ${exportContent},\n}\n`
      + `\nexport default {\n  ${exportContent},\n}\n`,
      {},
    )
    return [true, sidebarItems]
  }
  return [false, []]
}

/**
 * 删除文件夹
 */
function removeDir(path: string) {
  let files = []
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)
    files.forEach((file) => {
      const curPath = `${path}/${file}`
      if (fs.statSync(curPath).isDirectory())
        removeDir(curPath)

      else
        fs.unlinkSync(curPath)
    })
    fs.rmdirSync(path)
  }
}

generateEntries()
