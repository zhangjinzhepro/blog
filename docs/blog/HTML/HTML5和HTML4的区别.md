# HTML5主要解决了以往文档的一些痛点：

1. **解决文档结构混乱**
以前的文档结构过度依赖div，HTML5推出了多种语义化标签，使得文档更利于阅读器等理解，更利于SEO优化。

2. **解决浏览器之间的兼容性问题**
市场上浏览器种类繁多，每个浏览器厂商都在做自己的东西，没有一个标准限制，HTML5的出现就是为了统一标准。目前主流浏览器除IE6,7,8以外都支持HTML5标准

3. **扩展Web应用的功能**
以前Web页面仅仅只是展示作用，HTML5出现许多新的api，浏览器厂商也在迅速的封装这些api，使得Web页面更像是一个多交互的应用程序而非单纯的页面展示。

## 主要的区别：

1. **语法改变：**

- 文档声明的变化
文档声明的作用就是告诉标记语言解析器，应该用什么文档类型定义（DTD）来解析。
超文本4.01规定了3种文档类型：**严格、过渡、框架集**。格式类似于这样：

```
// HTML4.01
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//en" "http://www.w3.org/TR/html4/strict.dtd"> 

//HTML5
<!DOCTYPE HTML> 
//这里所有的doctype不区分大小写
```

- 具有布尔值的属性

```
<inpout type="text" disabled />
```

- 可以指定字符编码

```
<meta charset="UTF-8">
```

2. **新增的元素和废除的元素：**

- 新增的结构元素：
`article`、`section`、`side`、`header`、`footer`、`nav`等

- 新增的input类型：
email、number、url、range等

- 新增的其他元素：
`video`、`audio`、`canvas`、`datalist`等

- 废除的元素：
一些能被css代替的元素：`big`、`s`、`u`等

 - 不再使用frame框架
可以使用iframe等

3. **全局属性：**

- `contentEditable`----------富文本编辑属性
- `designMode`----------用来指定整个页面是否可编辑，当页面可编辑时，页面中任何支持`contentEditable`属性的元素都变成了可编辑状态。
`designMode`属性只能在JavaScript脚本里被编辑修改。该属性有两个值--“on”与“off”。属性被指定为“on”时，页面可编辑；被指定为“off”时，页面不可编辑。
- `hidden`----------类似于`display:none`
- `spellsheck`----------文本框的拼写检查
- `tabindex`----------使用Tab键访问的顺序
