import theme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'

export default {
  ...theme,
  Layout() {
    return h(theme.Layout, null, {
      // 'home-hero-image': () => {},
    })
  },
  // enhanceApp({ app, router, siteData }) {
  //
  // },
}
