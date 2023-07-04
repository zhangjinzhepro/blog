
interface NavLink {
  /** 站点图标 */
  icon?: string | { svg: string }
  /** 站点名称 */
  title: string
  /** 站点描述 */
  desc?: string
  /** 站点链接 */
  link: string
}
type NavData = {
  title: string
  items: NavLink[]
}


export const NAV_DATA: NavData[] = [
  {
    title: 'JavaScript相关',
    items: [
      {
        title: 'MDN',
        desc: '最权威的web技术查询。',
        icon: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
        link: 'https://developer.mozilla.org/zh-CN/'
      },
      {
        title: 'ECMA-262',
        desc: 'js标准查询。',
        icon: 'https://tc39.es/ecma262/img/ecma-logo.svg',
        link: 'https://tc39.es/ecma262/'
      },
      {
        title: '阮一峰 ES6 入门教程',
        desc: '《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。',
        icon: 'https://es6.ruanyifeng.com/favicon.ico',
        link: 'https://es6.ruanyifeng.com/'
      }
    ]
  }
]
