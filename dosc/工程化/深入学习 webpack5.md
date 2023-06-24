# 深入学习 webpack5

## webpack 和 webpack-cli 的关系

cli 不是必须的，他只是处理 webpack 命令及参数，现在框架基本都是用自己的 cli。([v1.2.7](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.2.7))
`compiler.js`

## 为什么使用 webpack

浏览器不支持 commonjs，旧版浏览器不支持 esmodule，一些 js 语法问题及代码压缩、混淆等，处理这些问题要是用 webpack

## 学习进程

### 搭建 webpack 环境，简单模拟不同引入方式([v1.0.0](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.0.0))

### 配置文件的简单使用([v1.0.1](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.0.1))

### 配置文件重构重命名([v1.0.2](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.0.2))

### 路径相关([v1.1.9](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.1.9))

- `output.publicPath`
- `devServer.static.publicPath`: 静态资源公共路径
- `devServer.static.directory`: 静态资源跟路径

### resolve([v1.2.0](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.2.0))

用于设置模块如何解析

- 绝对路径：无需处理
- 相对路径：获取文件上下文以确定绝对路径
- 模块路径
    - `resolve.module`中指定的目录检索模块，默认`node_modules`
    - alias 路径

#### 确定文件

`./file`

- 文件具有扩展名，直接打包
- 文件没有扩展名，使用 resolve.extension 解析
- 文件夹，使用`resolve.mainFiles`（默认 index）和`resolve.extension`解析

#### extension

```js
extensions: [".js", ".jsx", ".ts", ".vue", ".json"];
```

#### alias

```js
"@": path.resolve(__dirname, "../src/")
```

### css-loader 的使用([v1.0.3](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.0.3))

编译 css 文件。行内模式（不常用）、cli 模式（已废弃）、配置文件模式（常用）。

加载其他 loader 重新编译：`importLoaders`

### style-loader 的使用([v1.0.4](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.0.4))

创建 style 标签，将编译后的 css 插入。顺序：后到前、右到左。

### less-loader 的使用([v1.0.5](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.0.5))

可单独使用 lessc 命令。

`lessc ./src/css/component.less . /src/css/component1.css`

编译 less 文件。

### browserslist 的使用([v1.0.6](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.0.6))

设置浏览器兼容性供其他工具。配置文件形式、packagejson 形式。使用 caniuse-lite 查询，[文档](https://github.com/browserslist/browserslist#readme)

查询适配的浏览器  
`browserslist '>1%, last 2 version'`

### postcss 的使用([v1.0.7](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.0.7))

可单独使用 postcss 命令，也可配置文件使用。需结合其他插件实现其他功能。

`postcss --use autoprefixer -o ./src/css/postcss1.css ./src/css/postcss.css`

- autoprefixer: 加前缀
- postcss-preset-env(包含 autoprefixer): 使用未来特性

### file-loader 的使用([v1.0.8](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.0.8))

处理图片资源，以图片为模块处理到静态文件夹。注意高版本 default、esModule 等配置问题。

### url-loader 的使用([v1.0.9](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.0.9))

同 file-loader 差不多，小图片可以转换 base64。

### asset_module_type 的使用([v1.1.0](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.1.0))

webpack5 内部集成静态资源打包

- asset/resource: file-loader（处理图片，字体等文件）
- asset/inline: url-loader（图片转换 base64）
- asset: 可自动判断图片大小（url-loader）

### clean-webpack-plugin 的使用([v1.1.1](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.1.1))

用于在构建前删除构建文件。

### html-webpack-plugin 的使用([v1.1.2](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.1.2))

用于定义 html 模板,minify属性定义模板格式化相关。

### DefinePlugin 的使用([v1.1.3](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.1.3))

webpack 内置，用于定义全局变量，注意字符串格式。

### copy-webpack-plugin 的使用([v1.1.4](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.1.4))

用于复制根目录下的文件，注意高版本下的 api 配置问题。

### webpack 打包后内部结构([v1.1.5](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.1.5))

[语雀文档](https://www.yuque.com/izhangjinzhe/developer/ygvm72gncn5kae2d)

### source-map 的使用([v1.1.6](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.1.6))

1. false：不生成 source-map
2. source-map：生成 source-map 独立文件
3. eval-source-map：source-map 以 DataUrl 添加到 eval 函数后面
4. inline-source-map：source-map 以 DataUrl 添加到 bundle 文件最后
5. cheap-source-map：低开销的的 source-map，没有生成列映射
6. cheap-module-source-map:同上，对 loader 也会简化
7. hidden-source-map：删除对 source-map 的引用
8. nosource-source-map：有提示，但是删除对源代码的映射
9. 语法`[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map`
10. [文档](https://webpack.docschina.org/configuration/devtool/#root)

### babel 的使用([v1.1.7](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.1.7))

[文档](https://babel.docschina.org/)  
Babel 是一个工具链，主要用于在当前和旧的浏览器或环境中，将 ECMAScript 2015+ 代码转换为 JavaScript 向后兼容版本的代码。

- `@babel/core`：babel 核心包，微内核，实现功能需安装插件
- `@babel/cli`：babel 命令行工具
- `@babel/preset-env`：一个智能预设，它允许您使用最新的 JavaScript
- `babel ./src/main.js --out-dir ./src/babel --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping`

#### 原理

源代码 -> 词法分析 -> tokens -> 语法分析 -> AST -> 遍历 -> 访问 -> 应用插件 -> 新 AST -> 生成新代码

[文档](https://github.com/jamiebuilds/the-super-tiny-compiler)

#### babel-loader

webpack 中调用`@babel-core`的工具，可调用`.browerslistrc`配置文件转换，

#### 废弃 Stage-X 预设

[文档](https://babel.docschina.org/docs/en/presets/#stage-x-%E5%AE%9E%E9%AA%8C%E6%80%A7%E9%A2%84%E8%AE%BE)

#### polyfill

向后兼容 javascript 语法
[配置](https://github.com/zloirock/core-js#babelpolyfill)

- `@babel/polyfill`：_已废弃_
- `useBuiltIns: false`：停用
- `useBuiltIns: 'usage'`：根据项目里使用的引入
- `useBuiltIns: 'entry'`：根据目标环境的引入（需引入`regenerator runtime`和`core-js`）

#### @babel/plugin-transform-runtime

假如你开发的代码需要被别人使用，那么使用 useBuiltIns 可能会造成全局变量污染。
使用`@babel/plugin-transform-runtime`可将代码创建沙盒环境执行。

#### 处理 react

`@babel/preset-react`可以直接处理 jsx

#### 处理 typescript

- `typescript`：tsc 命令，ts 的编译器。
- `ts-loader`：调用 tsc 的 loader
- 使用`tsc --init`生成 tsconfig.json
- _ts 默认没有 polyfill，使用@babel/preset-typescript 预设解决。_
    - babel 负责转换，tsc 负责检查（以命令行的形式）

#### 处理 vue

- `vue`：核心
- `vue-loader`：官方 loader
- `vue-template-compiler`：解析 template 必须组建
- `VueLoaderPlugin`：必须组件

#### ESLint

静态代码分析工具 [文档](http://eslint.cn/)

- `eslint --init`生成配置文件
- `npx eslint ./src/main.js`校验
- `eslint-loader`：已经废弃建议使用`eslint-webpack-plugin`

#### prettier

代码风格限制工具

#### 冲突问题

冲突的本质在于`eslint`既负责了代码质量检测，又负责了一部分的格式美化工作,格式化部分的部分规则和`prettier`不兼容。 能不能让`eslint`只负责代码质量检测而让`prettier`负责美化，`eslint-config-prettier`（关闭冲突的规则） + `eslint-plugin-prettier`（提供格式化能力）。

### devServer 和 HMR([v1.1.8](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.1.8))

[文档](https://babel.docschina.org/)

- `webpack-dev-server`：将编译后的文件直接放到内存中（使用 memfs）
- `webpack-dev-middleware`：自定义`server.js`
- `hot: true`：配合`module.hot.accept`使用，only：错误回退热更新
- 默认开启 gzip 压缩
- `host`
    - `localhost`：通常情况下被解析成 127.0.0.1
    - `127.0.0.1`：回环地址。发出去的包直接被自己接收，在网络层直接被获取。在同一网段下的主机不能访问。
    - `0.0.0.0`：监听 ipv4 所有地址。在同一网段下的主机可以访问

#### 原理

- devServer 提供了静态资源服务（web）和 socket 服务
- 修改过的文件被发送为 json 和 js，json 记录修改位置，js 为源文件

#### js

使用`module.hot.accept`手动引入

#### react

配置`react-refresh-webpack-plugin`和`react-refresh/babel`

#### vue

vue-loader 自带 HMR

#### proxy

[文档](https://webpack.docschina.org/configuration/dev-server/#devserverproxy)

### 配置环境分离
1. 使用命令行`--env`。
2. 配置文件分离。
    - 使用`webpack-merge`合并配置文件
    - 使用`process.env`环境变量控制babel条件处理

### 代码分离([v1.2.1](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.2.1))
1. 使用多入口配置
2. splitChunks [文档](https://webpack.docschina.org/plugins/split-chunks-plugin/)
3. 动态导入
    - `webpackChunkName`
    - `webpackPrefetch`：用于未来的某个时刻。
    - `webpackPreload`：在父 chunk 中立即请求。
4. runtime相关代码抽离
    - `true, multiple`：为每个入口添加一个只含有 runtime 的额外 chunk
    - `single`：创建一个在所有生成 chunk 之间共享的运行时文件

### 性能优化([v1.2.2](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.2.2))

#### CDN
- 配置outputPath
- 配置externals
- 使用ejs 模板语法区分环境引入cdn

#### ProvidePlugin(不推荐使用)
预置全局变量

#### MiniCssExtractPlugin
抽离css代码

#### css-minimizer-webpack-plugin
压缩css

#### Hash
- hash：整个项目的hash一致
- chunkhash：同一个入口的chunk一致
- contenthash：对应chunk里的内容

### DLL
动态链接库(不推荐使用)
- 生成dll，配置DllPlugin
- 将dll复制到别的项目，使用DllReferencePlugin
- 将dll使用add-asset-html-webpack-plugin复制到dist目录

### TerserWebpackPlugin

使用 terser 来压缩 JavaScript。[文档](https://webpack.docschina.org/plugins/terser-webpack-plugin)


### scope hoisting([v1.2.3](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.2.3))
ModuleConcatenationPlugin[文档](https://webpack.docschina.org/plugins/module-concatenation-plugin/#root)


### tree shaking

摇树优化，消除未调用的代码。

- usedExports：标记某些函数`/* unused harmony export xxx */`，通过terser优化。
- sideEffects：跳过整个文件/模块，直接查看该文件有无副作用
    - true：都有副作用（默认值）
    - false：都无副作用（不会被打包）
    - 文件路径数组：单独配置有副作用文件
    - css
        - 单独配置loader sideEffects
        - `purgecss-webpack-plugin`[文档](https://purgecss.com/plugins/webpack.html)

### compression-webpack-plugin
压缩代码

### InlineChunkHtmlPlugin([v1.2.4](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.2.4))
将script chunks注入index.html，并删除引用。

### speed-measure-webpack-plugin([v1.2.5](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.2.5))
查看各个阶段构建速度(兼容性问题)

### 构建后bundle分析
- 使用`--profile --json=status.json`生成json配置文件，通过`http://webpack.github.io/analyse/` 分析。
- 使用`webpack-bundle-analyzer`

### webpack核心原理
[文档](https://juejin.cn/post/6949040393165996040)
[文档](https://juejin.cn/post/7125696644435148831)


### loader([v1.2.8](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.2.8))

- 可使用`resolveLoader`配置自定义loader路径
- loader从右到左执行，**在执行loader之前，会先 从左到右 调用 loader 上的 pitch 方法。**
- 调整loader顺序，拆分loader后使用enforce属性
- 同步loader使用return或this.callback返回
- 异步loader使用this.async()代替this.callback
- 使用this.getOption获取options配置和schema

### 自定义plugin([v1.2.9](https://github.com/izhangjinzhe/learning-webpack5/tree/v1.2.9))
`src/plugins/autoUpload.js`
