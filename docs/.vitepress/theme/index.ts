import theme from 'vitepress/theme'
import VppRunCode from 'vitepress-plugin-runcode'
import 'vitepress-plugin-runcode/styles.css'
import './index.css'

export default {
  ...theme,
  enhanceApp({ app }) {
    app.use(VppRunCode)
  },
}
