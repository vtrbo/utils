import fs from 'fs'
import fg from 'fast-glob'
import { firstUpperCase } from './../packages/string/firstUpperCase'

/**
 * 生成入口文件主函数
 */
const generateEntries = () => {
  // fn files
  const fnFiles = fg.sync([
    'packages/**/*.ts',
    '!packages/**/*.test.ts',
    '!packages/**/*.exam.ts',
    '!packages/**/*/types.ts',
    '!packages/index.ts',
    '!packages/*/index.ts',
  ])

  // fn entries
  const fnEntries = fg.sync(['packages/*.ts', '!packages/*.test.ts', '!packages/*.exam.ts'])
  fnEntries.forEach(f => fs.unlinkSync(f))

  // doc sidebar
  const topic = fg.sync(['docs/.vitepress/sidebar.ts'])
  topic.forEach(f => fs.unlinkSync(f))

  // index content
  let indexImport = ''
  let indexExport = ''
  let indexResolve = ''
  const sidebarContent: {
    text: string
    items: {
      text: string
      link: string
    }[]
  }[] = []

  // wrote module entry list
  const pkWrote: string[] = []

  fnFiles.forEach((f: string) => {
    const fsp = f.split('/')
    const mark = fsp[1]
    const path = fsp.slice(1, 2).join('/')

    if (!pkWrote.includes(mark)) {
      // record write module
      pkWrote.push(mark)

      // doc dirs
      removeDir(`docs/method/${mark}`)
      fs.mkdirSync(`docs/method/${mark}`)

      const [status, sidebarItems] = writeModuleEntry({ mark, path })

      if (status) {
        sidebarContent.push({
          text: mark,
          items: sidebarItems,
        })

        indexImport += `import ${mark}, { resolve${firstUpperCase(mark)}Utils } from './${path}'\n`
        indexExport += `\n  ${mark},`
        indexResolve += `\n    ...resolve${firstUpperCase(mark)}Utils(aliasPrefix),`
      }
    }
  })

  // write packages/index.ts
  fs.writeFileSync(
    'packages/index.ts',
`// 此文件为自动生成的导出文件
// 请务必不要在此文件进行修改或其他操作
// 因为你做的所有修改和操作都不会生效
${indexImport}
// 自动导入函数的方法，仅适用于 unplugin-auto-import 插件
// https://github.com/antfu/unplugin-auto-import
// @param aliasPrefix 别名前缀
// @returns 符合 unplugin-auto-import custom import 的格式
//
// @example 以 vite 为例
// import autoImports from 'unplugin-auto-import/vite'
//
// 全局引入和按需引入原则上不同时使用
// 如果非要使用，请传入不同的 aliasPrefix
// // 全局引入
// // import { resolveUtils } from '@vtrbo/utils'
// // 按需引入 Array 和 Tree 函数库
// import { resolveArrayUtils } from '@vtrbo/utils/array'
// import { resolveTreeUtils } from '@vtrbo/utils/tree'
//
// autoImports({
//   imports: [
//     // 全局引入
//     // resolveUtils(),
//     // 按需引入 Array 和 Tree 函数库
//     resolveArrayUtils(),
//     resolveTreeUtils(),
//   ]
// })
export const resolveUtils = (aliasPrefix?: string): Record<string, [string, string][]> => {
  return {${indexResolve}\n
  }
}

export {${indexExport}\n}

export default {${indexExport}\n}
`
, {})

  // write doc sidebar
  let exportTopic = 'export default [\n'
  const sidebar = sidebarContent.map((m) => {
    const { text, items } = m
    const sidebarItems = items.map((im) => {
      const { text, link } = im
      return `      { text: '${text}', link: '${link}' }`
    })
    return `  {
    text: '${firstUpperCase(text)}',
    items: ${sidebarItems.length ? `[\n${sidebarItems.join(',\n')},\n    ],\n` : '[],\n'}  }`
  })
  exportTopic += `${sidebar.join(',\n')},`
  exportTopic += `
] as {
  text: string
  items: {
    text: string
    link: string
  }[]
}[]
`

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
  // module fn files
  const fnFiles = fg.sync([
    `packages/${mark}/**/*.ts`,
    `!packages/${mark}/**/*.test.ts`,
    `!packages/${mark}/**/*.exam.ts`,
    `!packages/${mark}/**/*/types.ts`,
    `!packages/${mark}/*/index.ts`,
  ])

  // create module entry
  const fnEntry = `packages/${mark}/index.ts`
  fs.writeFileSync(
    fnEntry,
`// 此文件为自动生成的导出文件
// 请务必不要在此文件进行修改或其他操作
// 因为你做的所有修改和操作都不会生效
`, {})

  const entryExport: string[] = []
  const sidebarItems: { text: string; link: string }[] = []

  fnFiles.forEach((f: string): void => {
    // read fn file content
    const fnData = fs.readFileSync(
      f,
      { encoding: 'utf-8' },
    )

    // get all fn name
    const fnNamesRegEx = /export function(.*?)(<|\()|export (const|let|var)(.*?)=/g
    const fnNameExport = (fnData.match(fnNamesRegEx) || []).map(m => m.replace(fnNamesRegEx, '$1$4').trim())

    // write single fn import
    if ((fnNameExport || []).length) {
      const fnNameImport = [...new Set(fnNameExport)].sort((A, B) => A.localeCompare(B, 'zh-CN')).join(',\n  ')

      const filePath = f.replace(/packages\/.*?\/(.*?).ts/g, '$1')

      fs.appendFileSync(
        fnEntry,
`import {
  ${fnNameImport},
} from './${filePath}'

`, {})

      entryExport.push(...fnNameExport)
    }

    // doc example path
    const exPath = f.replace('.ts', '.exam.ts')

    if (fs.existsSync(exPath)) {
      const desc = fnData.replace(/[\S\s]*\* @desc (.*)\n \*[\S\s]*/g, '$1')
      const func = fnData.replace(/[\S\s]*\* @func (.*)\n \*[\S\s]*/g, '$1')
      const docPath = `docs/method/${mark}/${func}.md`

      fs.writeFileSync(
        docPath,
`# ${firstUpperCase(func)}

## Description
${desc}

`, {})

      const exData = fs.readFileSync(
        exPath,
        { encoding: 'utf-8' },
      )

      const jsCode = exData.replace(/import.*?from.*?\n/g, '').replace(fnNameExport[0], func)

      fs.appendFileSync(
        docPath,
`## Run Online

<RunCode>

\`\`\`ts
${jsCode.trim()}
\`\`\`

</RunCode>

`, {})

      const paramsRegEx = /\* @param(\.option)? \{ (.*) \}(.*)-(.*)?=(.*)/g
      paramsRegEx.lastIndex = 0
      const options = (fnData.match(paramsRegEx) || []).map(m => m.replaceAll(paramsRegEx, (_, ...mat) => {
        const [m1, m2, m3, m4, m5] = mat
        const sxm = (m1 ? `${m1.replace('.', '').trim()}.` : '') + m3.replace(/\[|\]/g, '').trim()
        const ms = m4.trim()
        const lx = m2.replace(/\|/g, '\\|').trim()
        const mrz = m5.trim()
        return `| ${sxm} | ${ms} | ${lx} | ${mrz} |`
      }))

      const paramsTable = `## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
${options.join('\n')}

</div>`

      fs.appendFileSync(
        docPath,
        paramsTable,
        {},
      )

      sidebarItems.push({ text: func, link: `/method/${mark}/${func}` })
    }
  })

  if ((entryExport || []).length) {
    // module entry
    const exportContent = [...new Set(entryExport)]
      .sort((A, B) => A.localeCompare(B, 'zh-CN'))

    fs.appendFileSync(
      fnEntry,
`// 自动导入函数的方法，仅适用于 unplugin-auto-import 插件
// https://github.com/antfu/unplugin-auto-import
// @param aliasPrefix 别名前缀
// @returns 符合 unplugin-auto-import custom import 的格式
//
// @example 以 vite 为例
// import autoImports from 'unplugin-auto-import/vite'
//
// 全局引入和按需引入原则上不同时使用
// 如果非要使用，请传入不同的 aliasPrefix
// // 全局引入
// // import { resolveUtils } from '@vtrbo/utils'
// // 按需引入 ${firstUpperCase(mark)} 的函数库
// import { resolveArrayUtils } from '@vtrbo/utils/array'
//
// autoImports({
//   imports: [
//     // 全局引入
//     // resolveUtils(),
//     // 按需引入 ${firstUpperCase(mark)} 的函数库
//     resolve${firstUpperCase(mark)}Utils(),
//   ]
// })
export const resolve${firstUpperCase(mark)}Utils = (aliasPrefix?: string): Record<string, [string, string][]> => {
  return {
    '@vtrbo/utils/${mark}': [
      ${exportContent.map(name => `[\'${name}\', aliasPrefix ? \`\${aliasPrefix}${firstUpperCase(name)}\` : '${name}']`).join(',\n      ')},
    ],
  }
}

export {
  ${exportContent.join(',\n  ')},
}

export default {
  ${exportContent.join(',\n  ')},
}
`, {})
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
