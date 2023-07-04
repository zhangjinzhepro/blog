
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
    title: 'JavaScript',
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
      },
      {
        title: '廖雪峰 JavaScript教程\n',
        desc: '这是小白的零基础JavaScript全栈教程。',
        icon: 'https://www.liaoxuefeng.com/favicon.ico',
        link: 'https://www.liaoxuefeng.com/wiki/1022910821149312'
      },
      {
        title: '现代 JavaScript 教程',
        desc: '以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。',
        icon: 'https://zh.javascript.info/img/favicon/favicon.png\n',
        link: 'https://zh.javascript.info/'
      },
      {
        title: 'freeCodeCamp',
        desc: '交互式 web 技术教程。',
        icon: 'https://www.freecodecamp.org/chinese/favicon-32x32.png?v=6cba562cbd10e31af925a976f3db73f7\n',
        link: 'https://www.freecodecamp.org/chinese/learn'
      },
      {
        title: 'JavaScript 秘密花园',
        desc: '深入 JavaScript 某些特性。',
        icon: 'http://shamansir.github.io/JavaScript-Garden/favicon.ico?v=2\n',
        link: 'http://shamansir.github.io/JavaScript-Garden/zh/'
      }
    ]
  },
  {
    title: 'React',
    items: [
      {
        title: 'React官方文档',
        desc: '用于构建 Web 和原生交互界面的库。',
        icon: 'https://react.docschina.org/favicon.ico\n',
        link: 'https://zh-hans.react.dev/'
      },
      {
        title: 'ReactRouter官方文档',
        desc: '最流行的React路由选择。',
        icon: 'https://reactrouter.com/favicon-light.png\n',
        link: 'https://reactrouter.com/en/main'
      },
      {
        title: 'Redux',
        desc: 'JS 应用的状态容器，提供可预测的状态管理。',
        icon: 'https://cn.redux.js.org/img/favicon/favicon.ico\n',
        link: 'https://cn.redux.js.org/'
      },
      {
        title: 'MobX',
        desc: '简单，可扩展的状态管理。',
        icon: 'https://zh.mobx.js.org/img/favicon.png',
        link: 'https://zh.mobx.js.org/README.html'
      },
      {
        title: 'DvaJS',
        desc: '基于React和redux的轻量级elm风格框架。',
        icon: 'https://zos.alipayobjects.com/rmsportal/psagSCVHOKQVqqNjjMdf.jpg',
        link: 'https://dvajs.com/'
      },
      {
        title: 'UmiJS\n',
        desc: ' 插件化的企业级前端应用框架。',
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        link: 'https://v3.umijs.org/zh-CN'
      },
      {
        title: 'Ant Design',
        desc: '助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」~',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg\n',
        link: 'https://ant.design/index-cn'
      },
      {
        title: 'Ant Design Pro',
        desc: '开箱即用的中台前端/设计解决方案',
        icon: 'https://pro.ant.design/favicon.png\n',
        link: 'https://pro.ant.design/zh-CN'
      },
      {
        title: 'Ant Design Mobile',
        desc: '探索移动端 Web 的体验极限',
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
        link: 'https://mobile.ant.design/zh/'
      },
      {
        title: '飞冰 (ICE)',
        desc: '基于 React 的应用研发框架，开箱即用，同时支持移动端和桌面端',
        icon: 'https://v3.ice.work/img/logo.png',
        link: 'https://v3.ice.work/'
      }
    ]
  },
  {
    title: 'Vue',
    items: [
      {
        title: 'Vue3',
        desc: '渐进式 JavaScript 框架。易学易用，性能出色，适用场景丰富的 Web 前端框架。',
        icon: 'https://cn.vuejs.org/logo.svg\n',
        link: 'https://cn.vuejs.org/'
      },
      {
        title: 'Vue2',
        desc: '渐进式 JavaScript 框架。',
        icon: 'https://v2.cn.vuejs.org/images/logo.svg\n',
        link: 'https://v2.cn.vuejs.org/'
      },
      {
        title: 'Vue Router',
        desc: '为 Vue.js 提供富有表现力、可配置的、方便的路由。',
        icon: 'https://router.vuejs.org/logo.svg\n',
        link: 'https://router.vuejs.org/zh/'
      },
      {
        title: 'Pinia',
        desc: '您将喜欢使用的 Vue 存储库',
        icon: 'https://pinia.web3doc.top/logo.svg\n',
        link: 'https://pinia.web3doc.top/'
      },
      {
        title: 'create-vue',
        desc: '启动Vue项目的推荐方法。',
        icon: 'https://cn.vuejs.org/logo.svg\n',
        link: 'https://github.com/vuejs/create-vue'
      },
      {
        title: 'Vue CLI',
        desc: 'Vue.js 开发的标准工具（现已处于维护模式!）',
        icon: 'https://cli.vuejs.org/favicon.png',
        link: 'https://cli.vuejs.org/zh/'
      },
      {
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg\n',
        link: 'https://element-plus.org/zh-CN/'
      },
      {
        title: 'Element',
        desc: '为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
        icon: 'https://element.eleme.io/favicon.ico\n',
        link: 'https://element.eleme.io/#/zh-CN'
      },
      {
        title: 'Ant Design of Vue',
        desc: '这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。',
        icon: 'https://aliyuncdn.antdv.com/favicon.ico\n',
        link: 'https://www.antdv.com/docs/vue/introduce-cn/'
      },
      {
        title: 'Vant',
        desc: '有赞团队轻量、可定制的移动端 Vue 组件库。',
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png\n',
        link: 'https://vant-ui.github.io/vant/#/zh-CN'
      },
      {
        title: 'Cube UI',
        desc: '滴滴团队基于 Vue.js 实现的精致移动端组件库。',
        icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico\n',
        link: 'https://didi.github.io/cube-ui/#/zh-CN'
      },
      {
        title: 'Mint UI',
        desc: '饿了么团队基于 Vue.js 的移动端组件库。',
        icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico\n',
        link: 'http://mint-ui.github.io/#!/zh-cn'
      },
      {
        title: 'NutUI',
        desc: '京东团队的轻量级移动端组件库。',
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png\n',
        link: 'https://nutui.jd.com/#/'
      },
    ]
  },
  {
    title: 'Node',
    items: [
      {
        title: 'Nodejs文档',
        desc: 'Node.js 是一个开源的、跨平台的 JavaScript 运行时环境。',
        icon: 'https://img.nodejs.cn/favicon.png\n',
        link: 'https://nodejs.cn/'
      },
    ]
  }
]
