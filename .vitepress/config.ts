import { defineConfig } from 'vitepress'
import routers from "./router";
import mdItCustomAttrs from 'markdown-it-custom-attrs'
// https://vitepress.dev/reference/site-config


export default defineConfig(
  {
    markdown:{
      lineNumbers: true,
      config:(md)=>{
        md.use(mdItCustomAttrs, 'image', {
          'data-fancybox': 'gallery'
        })
      }
    },
    lang: 'zh-CN',
    // outDir: "./dist",
    title: "张晋哲",
    description: "",
    head: [
      [
        'link',{ rel: 'icon', href: '/images/logo.webp' }
      ],
      [
        "link",
        {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"},
      ],
      ["script",{ src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"}],
    ],
    themeConfig: {
      lastUpdated: {
        text: '本文更新于 ',
        formatOptions:{
          year: "numeric",
          month: "numeric",
          day: "numeric"
        }
      },
      search: {
        provider: 'local'
      },
      returnToTopLabel: '返回顶部',
      logo:  '/images/logo.webp',
      footer: {
        copyright: 'Copyright © 张晋哲</a>'
      },
      nav: routers.nav,
      sidebar: routers.sidebar,

      docFooter: {
        prev: false,
        next: false,
      },
      outline: {
        level: [2,3],
        label: '目录'
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/zhangjinzhepro' }
      ]
    },
  }
)
