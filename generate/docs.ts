import fs from 'fs'
import fg from 'fast-glob'
import { firstUpperCase } from './../packages/string'

/**
 * 生成侧边栏目录
 */
const generateTopic = () => {
  const entries = fg.sync(['packages/core/*/entry.ts'])
  const topic = fg.sync(['docs/.vitepress/sidebar.ts'])

  topic.forEach(f => fs.unlinkSync(f))

  let exportTopic = 'export default ['
  entries.forEach((f: string) => {
    const fsp = f.split('/')
    const mark = fsp[2]
    exportTopic += `\n  { text: '${firstUpperCase(mark)}', link: '/method/${mark}' },`
  })
  exportTopic += '\n]\n'

  fs.writeFileSync(
    'docs/.vitepress/sidebar.ts',
    exportTopic,
    {},
  )
}

generateTopic()
