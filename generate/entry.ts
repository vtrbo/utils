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
    '!packages/**/*/types.ts',
    '!packages/index.ts',
    '!packages/*/index.ts',
  ])

  // fn entries
  const fnEntries = fg.sync(['packages/*.ts', '!packages/*.test.ts'])
  // rm entries
  fnEntries.forEach(f => fs.unlinkSync(f))

  // fn docs
  const fnDocs = fg.sync(['docs/method/*.md'])
  // rm docs
  fnDocs.forEach(f => fs.unlinkSync(f))

  // index content
  let indexImport = ''
  let indexExport = ''
  let indexResolve = ''

  // wrote module entry list
  const pkWrote: string[] = []

  fnFiles.forEach((f: string) => {
    const fsp = f.split('/')
    const mark = fsp[1]
    const path = fsp.slice(1, 2).join('/')

    if (!pkWrote.includes(mark)) {
      pkWrote.push(mark)
      if (writeModuleEntry({ mark, path })) {
        // write packages/{module}.ts
        // fs.writeFileSync(
        //   `packages/${mark}.ts`,
        //   `export * from './${path}'\n`,
        //   {},
        // )
        indexImport += `import ${mark}, { resolve${firstUpperCase(mark)}Utils } from './${path}'\n`
        indexExport += `\n  ${mark},`
        indexResolve += `\n    ...resolve${firstUpperCase(mark)}Utils(aliasPrefix),`
      }
    }
  })

  // write packages/index.ts
  fs.writeFileSync('packages/index.ts',
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
  const entries = fg.sync(['packages/*/index.ts'])
  const topic = fg.sync(['docs/.vitepress/sidebar.ts'])

  topic.forEach(f => fs.unlinkSync(f))

  let exportTopic = 'export default ['
  entries.forEach((f: string) => {
    const fsp = f.split('/')
    const mark = fsp[1]
    exportTopic += `\n  { text: '${firstUpperCase(mark)}', link: '/method/${mark}' },`
  })
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
function writeModuleEntry(params: { mark: string; path: string }) {
  const { mark } = params
  // module fn files
  const fnFiles = fg.sync([
    `packages/${mark}/**/*.ts`,
    `!packages/${mark}/**/*.test.ts`,
    `!packages/${mark}/**/*/types.ts`,
    `!packages/${mark}/*/index.ts`,
  ])

  // create module entry
  const fnEntry = `packages/${mark}/index.ts`
  fs.writeFileSync(fnEntry,
`// 此文件为自动生成的导出文件
// 请务必不要在此文件进行修改或其他操作
// 因为你做的所有修改和操作都不会生效
`, {})

  // create module doc
  const fnDoc = `docs/method/${mark}.md`
  fs.writeFileSync(
    fnDoc,
    `# ${firstUpperCase(mark)} 函数库\n\n`,
    {},
  )

  const entryExport: string[] = []

  fnFiles.forEach((f: string): void => {
    // 读文件内容
    const data = fs.readFileSync(
      f,
      { encoding: 'utf-8' },
    )

    // 取出所有导出的函数名称
    const fnNamesRegEx = /export.*?function(.*?)\(|export.*?(const|let|var)(.*?)=/g
    const fnNameExport = (data.match(fnNamesRegEx) || [])
      .map(m => m.replace(fnNamesRegEx, '$1$3').replace(/(.*?)<.*?>/g, '$1').trim())
      .sort((A, B) => A.localeCompare(B, 'zh-CN'))

    // 写单个文件函数的导入
    if ((fnNameExport || []).length) {
      const fnNameImport = [...new Set(fnNameExport)]
        .sort((A, B) => A.localeCompare(B, 'zh-CN'))
        .join(',\n  ')

      const filePath = f.replace(/packages\/.*?\/(.*?).ts/g, '$1')

      fs.appendFileSync(fnEntry,
`import {
  ${fnNameImport},
} from './${filePath}'

`, {})

      entryExport.push(...fnNameExport)
    }

    // 取出所有导出的函数注释
    const fnDocsRegEx = /(\/)([\*]){2}(.|\n)+?(\*){1}(\/)/g
    const fnDocsMatch = data.match(fnDocsRegEx) || []
    if (fnDocsMatch.length) {
      fnDocsMatch.forEach((f: string) => {
        const fnName = f.replace(/(\/\*{2}(.|\n)+?@function\s+?)(\S+)(\n{1}(.|\n)+?\*\/)/g, '$3').trim()
        fs.appendFileSync(
          fnDoc,
          `## ${fnName}\n\n`
          + '```ts\n'
          + `${f}\n`
          + '```\n\n',
          {},
        )
      })
    }
  })

  if ((entryExport || []).length) {
    // 写入口文件函数的导出
    const exportContent = [...new Set(entryExport)]
      .sort((A, B) => A.localeCompare(B, 'zh-CN'))

    fs.appendFileSync(fnEntry,
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
    return true
  }
  return false
}

generateEntries()
