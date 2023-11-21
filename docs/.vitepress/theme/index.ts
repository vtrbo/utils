import theme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'
import 'uno.css'
import './install'
import RunCodeEditor from '../components/run-code-editor'

export default {
  ...theme,
  Layout() {
    return h(theme.Layout, null, {
      // 'home-hero-image': () => {},
    })
  },
  enhanceApp({ app }) {
    app.component('demo', RunCodeEditor)
  },
}
