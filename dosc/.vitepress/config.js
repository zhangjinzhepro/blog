import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid"

import routers from "./router";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  {
    lang: 'zh-CN',
    outDir: "../dist",
    title: "张晋哲",
    description: "",
    lastUpdated: true,
    returnToTopLabel: true,
    mermaid:{},
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
      algolia: {
        appId: 'PDEGHFPKIN',
        apiKey: '6f186bf493b18009f5fd2b63a468d0e1',
        indexName: 'zhangjinzhe.cn'
      },
      head: [
        [
          'link',{ rel: 'icon', href: '/images/logo.png' }
        ]
      ],
      logo:  '/images/logo.png',
      footer: {
        message: '<a href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration: underline; color: #144a74">鲁ICP备2022007356号-1</a>',
        copyright: 'Copyright © 2020 - present 张晋哲</a>'
      },
      nav: routers.nav,
      sidebar: routers.sidebar,
      docFooter: {
        prev: '上一篇',
        next: '下一篇'
      },
      outline: {
        level: 'deep',
        label: '本页目录'
      },
      lastUpdatedText: '上次更新',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/yunshenpro' }
      ]
    }
  }
)
