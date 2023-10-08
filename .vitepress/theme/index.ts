// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import {useData} from "vitepress";
// @ts-ignore
import giscus from './giscus.vue'

export default {
  ...Theme,
  Layout: () => {
      return h(Theme.Layout, {}, {
        "doc-after": () => h(giscus),
      })
  },
  enhanceApp({ app, router, siteData }) {
  }
}
