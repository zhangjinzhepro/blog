# HTML标签

## 语义化标签

文本所不能描述的，如标题，段落，列表等。
现阶段web应用中，不推荐语义化标签，文本中推荐。
正确理解语义化标签，可以让我们的应用更加的易读（不管是对人还是对机器）

#6 

## 元信息标签

页面不可见，一般提供给机器，浏览器，屏幕阅读器使用。

```html
<!--文件的编码格式-->
<meta charset='utf-8' />

<!--设置一个命令-->
<meta http-equiv='content-type' content="text/html; charset=utf-8" />

<!--适配移动端-->
<meta name='viewport' content=“width=device-width; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no” /> 

<!--author,keywords,description等-->
```

## 链接标签

### \<link>

```html
<link rel="canonical" href="..."> </link>
<!-- 作为元信息类标签-->
<!-- canonical:提示页面的主url-->
<!-- alternate:提示页面的变型形式，可能是不同格式，不同语言，不同设备等-->
<!-- author:链接到作者-->
<!-- help:链接到帮助页面-->
<!-- search:链接到搜索页面-->
<!-- icon:页面icon-->

<!-- 作为预处理标签-->
<!-- dns-prefetch:提前对一个域名进行dns查询-->
<!-- precoonect:提前对一个url建立tcp链接-->
<!-- prefetch:提前对一个url的内容-->
<!-- preload:提前加载url-->
<!-- prerender:提前渲染url-->

<!-- 作为模块加载-->
<!-- <link rel="modulepreload" href="app.js">-->
<!-- <link rel="modulepreload" href="helpers.js">-->
<!-- <link rel="modulepreload" href="irc.js">-->
<!-- <link rel="modulepreload" href="fog-machine.js">-->
<!-- <script type="module" src="app.js">-->

<!--作为载入样式表-->
<link rel="stylesheet" href="..."> </link>
```

### \<a>

和`<link>`不同的是，`<a>`产生的链接会显示在网页内，而`<link>`只是元信息而已。

rel属性同大部分`<link>`语义相同。

### \<area>

生成区域性连接

```html
<p>
 Please select a shape:
 <img src="shapes.png" usemap="#shapes"
      alt="Four shapes are available: a red hollow box, a green circle, a blue triangle, and a yellow four-pointed star.">
 <map name="shapes">
  <area shape=rect coords="50,50,100,100"> <!-- the hole in the red box -->
  <area shape=rect coords="25,25,125,125" href="red.html" alt="Red box.">
  <area shape=circle coords="200,75,50" href="green.html" alt="Green circle.">
  <area shape=poly coords="325,25,262,125,388,125" href="blue.html" alt="Blue triangle.">
  <area shape=poly coords="450,25,435,60,400,75,435,90,450,125,465,90,500,75,465,60"
        href="yellow.html" alt="Yellow star.">
 </map>
</p>
```
