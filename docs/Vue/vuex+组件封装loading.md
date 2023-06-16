---
layout: post
title: vuex+组件封装loading
tags: [javascript, vue]
---
[[2020-02-15-vuex+组件封装loading]]
## Loading组件封装

> loading.vue
```vue
<template>
  <transition name="fade">
    <div id="loading" v-show="show" :class="type == 'normal' ? 'normal' : 'error'">
      <div>{{text}}</div>
    </div>
  </transition>
</template>

<script>
import * as types from '../store/types'

export default {
  props: ['show', 'text', 'type'],
  watch: {
    type (val) {
      if (val === 'error') {
        setTimeout(() => {
          this.$store.dispatch(types.SHOW_LOADING, false)
        }, 5000)
      }
    }
  }
}

</script>

<style lang="scss">
  @import "../assets/style/normalize.css";
  @import "../assets/style/function.scss";
  #loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 0 r(10);
    min-width: r(100);
    height: r(100);
    line-height: r(100);
    text-align: center;
    border-radius: r(10);
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  .fade-enter-active, .fade-leave-active{
  transition: opacity .4s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .normal {
    color: #ffffff;
  }
  .error {
    color: crimson;
  }

</style>
```

- Loading组件接受三个参数，分别是：
	- `show`：控制loading（显示/隐藏）
	- `type`：控制loading的样式（正常/错误）
	- `text`：显示文本内容


- `watch`的作用是当`type==error`的时候，5秒后关闭loading

## 在App.vue里引入loading

> App.vue

```vue
<template>
  <div id="app">
    <Loading :show="loading" :type="loading.type" :text="loading.text"></Loading>
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Loading from './components/loading'
export default {
  name: 'App',
  components: {
    Loading
  },
  computed: {
    ...mapGetters(['loading'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

- 这里我们引入了loading.vue，并从getters里取出loading对象注入到Loading组件里。

## Vuex相关

### Store文件结构

![store_framework](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/78467279-879ac900-773d-11ea-8c64-d72f31998f4b.png)


- 这里我使用Module来进行模块化，方便以后代码分割

### loading.js的编写

```js

import * as types from '../types'
const loading = {
  state: {
    loading: ''
  },
  mutations: {
    [types.SHOW_LOADING] (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    [types.SHOW_LOADING] ({ commit }, res) {
      commit(types.SHOW_LOADING, res)
    }
  },
  getters: {
    loading: state => state.loading
  }
}

export default loading

```

- `types`为事件类型的集合，单独抽出易维护
- `state`：Vuex使用单一状态树，所以我们要有一个state来存储我们的状态（和模块化并不冲突，模块化最终也会合并为一个state），
- `mutations`：Vuex使用单向数据流，要始终使用`mutations`来改变`state`的状态，而且要保证为同步操作，不能有异步。
- `action`：`action`和`mutations`相似，不过：
	- `action`提交的是`mutations`，不能直接修改状态
	- `action`可以是异步的，比如axios、fetch，甚至可以直接return一个Promise！  
- `getters`：可以理解为是store的计算属性，可以返回处理过的state，比如做一些过滤操作。

## 数据流流程

![flow](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/78467294-b9139480-773d-11ea-81e0-2300bab78fc6.jpg)


1. 通过`dispatch`方法调用`action`，并传入`payload`,
2. `action`里面可以调用异步方法（我这里并没有），解构出`commit`并调用`mutations`
3. `mutations`里面修改`state`
4. `getters`监听到`state`发生改变时重新计算返回
5. 页面内通过`mapGetters`将`gatters`映射到局部计算属性
6. 组件取到该属性并通过动态`props`传入到组件内部
7. 组件内部通过`props`属性获取相关值进行操作，流程完毕
