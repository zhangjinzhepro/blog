import { defineConfig } from 'vitepress'
import routers from "./router";

// https://vitepress.dev/reference/site-config
export default defineConfig(
    {
        lang: 'zh-CN',
        outDir: "./dist",
        title: "张晋哲",
        description: "",
        markdown: {
            lineNumbers: true
        },
        head: [
            [
                'link',{ rel: 'icon', href: '/images/logo.webp' }
            ]
        ],
        themeConfig: {
            returnToTopLabel: '返回顶部',
            algolia: {
                appId: 'PDEGHFPKIN',
                apiKey: '6f186bf493b18009f5fd2b63a468d0e1',
                indexName: 'zhangjinzhe.cn'
            },
            logo:  '/images/logo.webp',
            footer: {
                message: '鲁ICP备2022007356号-1',
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
                label: '目录'
            },
            socialLinks: [
                { icon: 'github', link: 'https://github.com/zhangjinzhepro' }
            ]
        }
}
)
