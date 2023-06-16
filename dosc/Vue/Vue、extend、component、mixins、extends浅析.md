---
layout: post
title: Vue、extend、component、mixins、extends浅析
tags: [vue]
---
## Vue

通过 `new Vue` 创建一个根Vue实例，同一个Vue应用里可以创建多个。

```
var vm = new Vue({...})
```

## extend

extend创建的是一个组件构造器，而不是一个组件实例，可以通过Vue.component注册为全局组件，也可以直接创建构造器的实例。  

其作用都是为了 `复用`。

通过Vue.component注册全局组件:
```
    var Comp = Vue.extend({
      template: '<div>{{ msg }}</div>'
    })

    Vue.component('my-component',Comp)
```

直接创建构造器的实例:

```
var Comp = Vue.extend({
  props: ['msg'],
  template: '<div>{{ msg }}</div>'
})
var vm = new Comp({
  propsData: {
    msg: 'hello'
}
```
*在实例化extends组件构造器时，传入属性必须是propsData*

## component

component创建的是全局组件，：

```
// 全局组件

var globalComponent = {...}
Vue.component("global-component",globalComponent)

/*这里等同于Vue.component("global-component",Vue.extend(globalComponent)。*/
/*并且返回的始终是构造函数。*/
/*我们在任何地方都可以通过global-component标签使用。*/


// 局部组件

var localComponent = {...}
new Vue({
  el: "#app"
  components: {
    localComponent
  } 
})
/*只能在id=app下使用*/
```

## mixins

mixins（混入）是一种代码复用的功能，混入对象可以包含任意的组件选项，所有混入对象的选项将被混入该组件本身的选项。

 - 当组件和混入对象含有同名选项时，以组件数据优先。
 - 同名钩子函数将混合为一个数组，因此都将被调用。
```
var mixin = {
  methods: {
    foo: function () {
      console.log('foo')
    },
    conflicting: function () {
      console.log('from mixin')
    }
  }
}

var vm = new Vue({
  mixins: [mixin],
  methods: {
    bar: function () {
      console.log('bar')
    },
    conflicting: function () {
      console.log('from self')
    }
  }
})

vm.foo() // => "foo"
vm.bar() // => "bar"
vm.conflicting() // => "from self"
```
*注意：mixins接受的是数组*
*注意：`Vue.extend()` 也使用同样的策略进行合并。* 

## extends

extends允许扩展到另一个组件，这主要是为了便于扩展单文件组件。

规则和`mixins`类似

```
var a = {
  data: function(){
    return {
      a: 1
    }
  }
}
var b = {
  extends: a,
  data: function(){
    return {
      a: 2
    }
  }
}
var B =  Vue.extend(b)
var vm = new B().$mount("#one") // a:2
```

总结：组件扩展使用 `mixins` 、`extends`，注册组件使用`extend`、`component`，具体需求具体分析。
