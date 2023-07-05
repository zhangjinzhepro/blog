
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
  items: NavLink[]
  title: string
}


export const NAV_DATA: NavData[] = [
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
        title: 'React Native',
        desc: '一次学习，随处书写。',
        icon: 'https://reactnative.dev/img/favicon.ico\n',
        link: 'https://reactnative.dev/'
      },
      {
        title: 'DvaJS',
        desc: '基于React和redux的轻量级elm风格框架。',
        icon: 'https://zos.alipayobjects.com/rmsportal/psagSCVHOKQVqqNjjMdf.jpg',
        link: 'https://dvajs.com/'
      },
      {
        title: 'UmiJS\n',
        desc: '插件化的企业级前端应用框架。',
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        link: 'https://v3.umijs.org/zh-CN'
      },
      {
        title: 'Next.js',
        desc: '这是一个用于生产环境的 React 框架。',
        icon: 'https://www.nextjs.cn/static/favicon/favicon.ico\n',
        link: 'https://www.nextjs.cn/'
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
        title: 'Vuex',
        desc: '一个专为 Vue.js 应用程序开发的状态管理模式 + 库。',
        icon: 'https://vuex.vuejs.org/logo.png\n',
        link: 'https://vuex.vuejs.org/zh/'
      },
      {
        title: 'Pinia',
        desc: '您将喜欢使用的 Vue 存储库',
        icon: 'https://pinia.web3doc.top/logo.svg\n',
        link: 'https://pinia.web3doc.top/'
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
        title: 'View Design',
        desc: '基于 Vue.js 3 的企业级 UI 组件库和中后台系统解决方案，为数万开发者服务。',
        icon: 'https://file.iviewui.com/view-design-dist/img/icon-view-design.2c31e959.svg\n',
        link: 'https://www.iviewui.com/'
      },
      {
        title: 'Ant Design of Vue',
        desc: '这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。',
        icon: 'https://aliyuncdn.antdv.com/favicon.ico\n',
        link: 'https://www.antdv.com/docs/vue/introduce-cn/'
      },
      {
        title: 'Nuxt',
        desc: '易懂的Web框架',
        icon: 'https://nuxt.com.cn/icon.png\n',
        link: 'https://nuxt.com.cn/'
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

    ]
  },
  {
    title: 'Node',
    items: [
      {
        title: 'Nodejs官方文档',
        desc: 'Node.js 是一个开源的、跨平台的 JavaScript 运行时环境。',
        icon: 'https://img.nodejs.cn/favicon.png\n',
        link: 'https://nodejs.cn/'
      },
      {
        title: 'Egg',
        desc: '为企业级框架和应用而生。',
        icon: 'https://www.eggjs.org/favicon.png\n',
        link: 'https://www.eggjs.org/zh-CN'
      },
      {
        title: 'Express',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架。',
        icon: 'https://express.nodejs.cn/images/favicon.png\n',
        link: 'https://express.nodejs.cn/'
      },
      {
        title: 'Koa',
        desc: 'Koa -- 基于 Node.js 平台的下一代 web 开发框架。',
        icon: 'https://koa.bootcss.com/public/images/koa-logo.png\n',
        link: 'https://koa.bootcss.com/'
      },
      {
        title: 'Nest',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架。',
        icon: 'https://docs.nestjs.cn/favicon.ico\n',
        link: 'https://docs.nestjs.cn/'
      },
    ]
  },
  {
    title: '小程序',
    items: [
      {
        title: '微信小程序官网文档',
        desc: '微信小程序官网文档',
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico\n',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
      },
      {
        title: 'uni-app',
        desc: '编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。',
        icon: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788\n',
        link: 'https://uniapp.dcloud.net.cn/'
      },
      {
        title: 'WePY',
        desc: '让小程序支持组件化开发的框架',
        icon: 'https://wepyjs.github.io/wepy-docs/static/img/wepylogo.png',
        link: 'https://wepyjs.github.io/wepy-docs/'
      },
      {
        title: 'Taro',
        desc: '多端统一开发解决方案',
        icon: 'https://taro.js.org/static/images/taro.png\n',
        link: 'https://taro.js.org/'
      },
      {
        title: 'WeUI',
        desc: '为微信小程序量身定制。',
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico\n',
        link: 'https://github.com/weui/weui-design'
      },
    ]
  },
  {
    title: 'UI库',
    items: [
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
        title: 'View Design',
        desc: '基于 Vue.js 3 的企业级 UI 组件库和中后台系统解决方案，为数万开发者服务。',
        icon: 'https://file.iviewui.com/view-design-dist/img/icon-view-design.2c31e959.svg\n',
        link: 'https://www.iviewui.com/'
      },
      {
        title: 'Ant Design of Vue',
        desc: '这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。',
        icon: 'https://aliyuncdn.antdv.com/favicon.ico\n',
        link: 'https://www.antdv.com/docs/vue/introduce-cn/'
      },
      {
        title: 'Material UI',
        desc: '直观的React UI工具。',
        icon: 'https://mui.com/static/favicon.ico\n',
        link: 'https://mui.com/'
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
      {
        title: 'Bootstrap',
        desc: '简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。',
        icon: 'https://www.bootcss.com/assets/favicons/favicon.ico\n',
        link: 'https://www.bootcss.com/'
      },
      {
        title: 'PaperCSS',
        desc: '手绘风格的css框架。',
        icon: 'https://www.getpapercss.com/favicon.ico\n',
        link: 'https://www.getpapercss.com/'
      },
    ]
  },
  {
    title: '编译&构建&打包',
    items: [
      {
        title: 'Webpack',
        desc: '用于现代 JavaScript 应用程序的静态模块打包工具',
        icon: 'https://www.webpackjs.com/favicon.f326220248556af65f41.ico\n',
        link: 'https://www.webpackjs.com/'
      },
      {
        title: 'Vite',
        desc: '下一代的前端工具链，为开发提供极速响应',
        icon: 'https://cn.vitejs.dev/logo.svg\n',
        link: 'https://cn.vitejs.dev/'
      },
      {
        title: 'Rollup',
        desc: 'JavaScript 打包器，将点滴代码编织成错综复杂的程序。',
        icon: 'https://cn.rollupjs.org/rollup-logo.svg\n',
        link: 'https://cn.rollupjs.org/'
      },
      {
        title: 'Gulp',
        desc: '用自动化构建工具增强你的工作流程！',
        icon: 'https://www.gulpjs.com.cn/img/favicon.png\n',
        link: 'https://www.gulpjs.com.cn/'
      },
      {
        title: 'Grunt',
        desc: 'JavaScript 世界的构建工具',
        icon: 'https://www.gruntjs.cn/img/favicons/favicon.ico\n',
        link: 'https://www.gruntjs.cn/'
      },
      {
        title: 'Babel',
        desc: 'Babel 是一个 JavaScript 编译器。',
        icon: 'https://www.babeljs.cn/img/favicon.png\n',
        link: 'https://www.babeljs.cn/'
      },
    ]
  },
  {
    title: '框架类库',
    items: [
      {
        title: 'single-spa',
        desc: '前端微服务的javascript框架',
        icon: 'https://zh-hans.single-spa.js.org/img/logo-blue-favicon.ico\n',
        link: 'https://zh-hans.single-spa.js.org/'
      },
      {
        title: 'qiankun',
        desc: '可能是你见过最完善的微前端解决方案',
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png\n',
        link: 'https://qiankun.umijs.org/zh'
      },
      {
        title: '无界',
        desc: '极致的微前端框架。',
        icon: 'https://wujie-micro.github.io/doc/wujie.svg\n',
        link: 'https://wujie-micro.github.io/doc/'
      },
      {
        title: 'Flutter',
        desc: '为任何设备构建应用程序',
        icon: 'https://storage.googleapis.com/cms-storage-bucket/4fd0db61df0567c0f352.png\n',
        link: 'https://flutter.dev/'
      },
      {
        title: 'Electron',
        desc: '使用JavaScript、HTML和CSS构建跨平台桌面应用程序',
        icon: 'https://www.electronjs.org/zh/assets/img/favicon.ico\n',
        link: 'https://www.electronjs.org/zh/'
      },
      {
        title: 'Angular',
        desc: '构建未来的 Web 开发框架',
        icon: 'https://angular.cn/assets/images/favicons/favicon.ico\n',
        link: 'https://angular.cn/'
      },
      {
        title: 'React Native',
        desc: '一次学习，随处书写。',
        icon: 'https://reactnative.dev/img/favicon.ico\n',
        link: 'https://reactnative.dev/'
      },
      {
        title: 'jQuery',
        desc: 'Query是一个快速、小巧、功能丰富的JavaScript库。',
        icon: 'https://jquery.com/jquery-wp-content/themes/jquery.com/i/favicon.ico\n',
        link: 'https://jquery.com/'
      },{
        title: 'Zepto',
        desc: 'Zepto是一个极简JavaScript库，用于现代浏览器，具有大部分与jquery兼容的API。',
        icon: 'https://zeptojs.com/favicon.png\n',
        link: 'https://zeptojs.com/'
      },
    ]
  },
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
      },
      {
        title: 'JavaScript开发者应懂的33个概念\n',
        desc: '为了帮助开发者掌握 JavaScript 概念而创立的。',
        icon: 'https://raw.githubusercontent.com/stephentian/33-js-concepts/master/33_js_concepts.jpg',
        link: 'https://github.com/stephentian/33-js-concepts/blob/master/README.md'
      },
      {
        title: '函数式编程',
        desc: '为了帮助开发者掌握 JavaScript 概念而创立的。',
        icon: '函',
        link: 'https://llh911001.gitbook.io/mostly-adequate-guide-chinese/'
      },
      {
        title: 'TypeScript',
        desc: 'JavaScript 的超集。',
        icon: 'https://www.tslang.cn/assets/images/icons/favicon.ico\n',
        link: 'https://www.tslang.cn/'
      }
    ]
  },
  {
    title: 'CSS',
    items: [
      {
        title: 'Sass',
        desc: '世界上最成熟、最稳定、最强大的专业级CSS扩展语言！',
        icon: 'https://www.sass.hk/favicon.ico\n',
        link: 'https://www.sass.hk/'
      },
      {
        title: 'Less',
        desc: '它是 CSS，只是多了一点东西。',
        icon: 'https://less.nodejs.cn/public/ico/favicon.ico\n',
        link: 'https://less.nodejs.cn/'
      },
      {
        title: 'PostCSS',
        desc: '是一个用 JavaScript 工具和插件转换 CSS 代码的工具。',
        icon: 'https://www.postcss.com.cn/assets/favicon.659f5617.ico\n',
        link: 'https://www.postcss.com.cn/'
      },
      {
        title: 'stylus',
        desc: '富于表现力、动态的、健壮的 CSS。',
        icon: 'https://www.stylus-lang.cn/favicon.ico\n',
        link: 'https://www.stylus-lang.cn/'
      },
      {
        title: 'Animate.css',
        desc: 'CSS动画。',
        icon: 'https://animate.style/img/favicon.ico\n',
        link: 'https://animate.style/'
      },
      {
        title: 'Autoprefixer',
        desc: 'Autoprefixer是一个PostCSS插件，它可以解析你的CSS并添加供应商前缀。',
        icon: 'https://autoprefixer.github.io/assets/icon/favicon.ico\n',
        link: 'https://autoprefixer.github.io/'
      },
      {
        title: 'Can I use',
        desc: '查询浏览器支持的现代web技术',
        icon: 'https://caniuse.com/img/favicon-128.png\n',
        link: 'https://caniuse.com/'
      },
    ]
  },
  {
    title: 'AI 工具',
    items: [
      {
        title: 'ChatGPT',
        desc: '世界上最成熟、最强大的对话交互AI模型',
        icon: 'https://openaiapi-site.azureedge.net/public-assets/d/3243891e2f/favicon.svg\n',
        link: 'https://chat.openai.com/'
      },
      {
        title: 'ChatGPT（国内替代版）',
        desc: 'ChatGPT Demo建立在ChatGPT-4的结构基础之上',
        icon: 'https://chat.chatgptdemo.net/assets/image/chatgpt.svg',
        link: 'https://chat.chatgptdemo.net/'
      },
      {
        title: 'chat-pdf',
        desc: '上传一个PDF文件，并询问有关它的任何问题。',
        icon: 'https://damngood.tools/favicon.ico\n',
        link: 'https://damngood.tools/tools/chat-pdf'
      },
      {
        title: 'AmyMind',
        desc: '打开即用，思维导图的基本素养',
        icon: 'https://amymind.com/logo192.png\n',
        link: 'https://amymind.com/'
      },
      {
        title: '写作猫',
        desc: '集AI写作、多人协作、文本校对、改写润色、自动配图等功能为一体',
        icon: 'https://uranus-static.oss-accelerate.aliyuncs.com/xiezuocat/favicon.ico\n',
        link: 'https://xiezuocat.com/'
      },
    ]
  },
  {
    title: '可视化',
    items: [
      {
        title: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库\n',
        icon: 'https://echarts.apache.org/zh/images/favicon.png?_v_=20200710_1\n',
        link: 'https://echarts.apache.org/zh/index.html'
      },
      {
        title: 'Three.js',
        desc: 'Web3D可视化',
        icon: 'Th',
        link: 'https://threejs.org/'
      },
      {
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案。',
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png\n',
        link: 'https://antv.vision/'
      },
      {
        title: 'DataV',
        desc: 'Vue 大屏数据展示组件库。',
        icon: 'http://datav.jiaminghi.com/favicon.ico\n',
        link: 'http://datav.jiaminghi.com/'
      },
    ]
  },
]
