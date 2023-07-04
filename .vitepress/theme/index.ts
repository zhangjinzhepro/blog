// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import {useData} from "vitepress";

export default {
  ...Theme,
  Layout: () => {
      const props: Record<string, any> = {}
      const { frontmatter } = useData()

      /* 添加自定义 class */
      if (frontmatter.value?.layoutClass) {
          props.class = frontmatter.value.layoutClass
      }

      return h(Theme.Layout, props)
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
