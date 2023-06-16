---
layout: post
title: html新增结构元素解析
tags: [html]
---
## HTML5新增结构元素`article`、`section`、`aside`、`nav`、`time`微格式


> -   `section`表示页面上的区域，主要的目的是给文章分段等，section里必须包含标题。

```
<section>
    <h1>标题</h1>
    <article>内容</article>
</section>
```

> -   `article`表示页面上独立的区域，和section相比，article更注重自身的独立性。

```
<article>
    <section>
        <h1>标题</h1>
        <p>内容</p>
    </section>
</article>
```

> -   `aside`表示页面的附加内容，可以是文章的含义，链接等

```
<article>
    <section>
        <h1>标题</h1>
         <p>内容</p>
    </section>
</article> 

<aside>
    <h1>评论</h1>
    <section>
        <h2>张</h2>
        <p>好听</p>
    </section>
</aside>    
```

> -   `nav`表示页面的导航，主要包括页面的主导航，侧边栏导航，页内导航和分页导航。

```
<nav>
    <ul>
        <li><a href="#">111</a></li>
        <li><a href="#">222</a></li>
        <li><a href="#">333</a></li>
    </ul>
</nav>
```

> -   `time`用datatime属性表示一个时间戳。**T**代表分隔符，**Z**代表格林威治标准时间，**+**代表时区，**pubdata**表示发布时间。

```
<time datatime="2017-01-09T13:02" pubdate>2017-01-09</time>
<time datatime="2017-01-10Z">2017-01-10</time>
<time datatime="2017-01-11+9:00">2017-01-11</time>
```

## 新增非结构元素`header`、`footer`、`address`、`figure`

> -   `header`标签用于页面的头部、文章的页眉等。页面中可以出现多个header标签。

```
<header>
  <h1>这是标题</h1>
</header>
<article>
  <header>
    <h2>这是文章标题</h2>
  </header>
</article>
```

> -   `footer`标签用于页面的注脚、文章的页脚等。页面中可以出现多个footer标签。

```
<article>
  <footer>
    <h2>这是文章页脚</h2>
  </footer>
</article>
<footer>
  <h1>这是注脚</h1>
</footer>
```

> -   `address`标签用于表示文档的作者，联系地址，用在body里表示文档的作者，用在article里表示文章的作者，通常和footer搭配使用。

```
<address>
  <ul>
    <li>姓名</li>
    <li>地址</li>
  </ul>
</address>
```

> -   `figure`标签表示独立的内容，figcaption表示figure的标题。figcaption标签赢始终置于figure的第一位或最后一位

```
<figure>
  <figcaption>这是内容</figcaption>
  <p>这里是文字</p>
</figure>
```

### 新增表单元素的属性`form`、`formaction`、`formmethod`、`formenctype`、`formtarget`、`required`、`autofocus`、`placeholder`、`list`、`autocomplete`、`pattern`、`indeterminate`

> -   新增属性form表示输入域所属的一个或多个表单。

```
<form id="userInfo">
地址：<input  type="text" />
<input type="submit" />
</form>
姓名： <input from="userInfo" type="text" />
```

> -   `formaction`可以重写表单action属性

```
<form id="userInfo" action="index.jsp">
姓名： <input name="name" type="text" />
地址：<input name="address" type="text" />
<input type="submit" formaction="userInfo.jsp" />
</form>
```

> -   `formenctype`可以重写表单enctype属性

```
<form id="userInfo" enctype="text/plain">
姓名： <input name="name" type="text" />
地址：<input name="address" type="text" />
<input type="submit" formenctype="multipart/form-data" />
</form>
```

> -   `formmethod`可以重写表单method属性。name属性为key，value属性为value

```
<form id="userInfo" method="post">
姓名： <input name="name" type="text" />
地址：<input name="address" type="text" />
<input type="submit" formmethod="get" />
</form>
```

> -   `formtarget`可以重写表单target属性。

```
<form id="userInfo" target="_self">
姓名： <input name="name" type="text" />
地址：<input name="address" type="text" />
<input type="submit" formtarget="_block" />
</form>
```

**以上属性只适用于type="submit"**

> -   required属性规定是必填字段。不符合规则的会弹出提示。

```
<form id="userInfo">
姓名： <input name="name" type="text" required />
地址：<input name="address" type="text" />
<input type="submit" />
</form>
```

> -   `autofocus`规定当页面加载完成时自动获得焦点。

```
<form id="userInfo">
姓名： <input name="name" type="text" required autofocus/>
地址：<input name="address" type="text" />
<input type="submit" />
</form>
```

> -   `placeholder`规定文本框未获取焦点时的文本内容。

```
<form id="userInfo">
姓名： <input name="name" type="text" placeholder="请输入用户名"/>
地址：<input name="address" type="text" />
<input type="submit" />
</form>
```

> -   `list`属性可以使单行文本框获得焦点时显示一个菜单可供选择，允许自行输入内容。

```
<form id="userInfo">
姓名： <input name="name" type="text" />
地址：<input name="address" type="text" list="citys" />
            <datalist id="citys">
                <option value="北京">北京</option>
                <option value="上海">上海</option>
            </datalist>
<input type="submit" />
</form>
```

> -   `autocomplete`属性可使浏览器根据用户已输入的内容显示用户过去输入过的内容。

```
<form id="userInfo">
姓名： <input name="name" type="text" autocomplete="on" />
地址：<input name="address" type="text" />
<input type="submit" />
</form>
```

> -   `pattern`属性规定本字段的验证模式。_不符合规则的会弹出提示。_

```
<form id="userInfo">
姓名： <input name="name" pattern="[a-z]{1,5}" type="text" />
地址：<input name="address" type="text" />
<input type="submit" />
</form>
```

> -   `indeterminate`属性是checked复选框的第三种状态：模糊状态。_单独用在html里不会起作用。_

```
<body>
  <form id="userInfo">
    <input type="checkbox" id="check" name="vehicle" value="Bike" /> I have a bike
  </form>
</body>
<script>
  var check = document.getElementById("check");
  check.indeterminate = true;
</script>
```