# MarkDown入门

## 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 代码

###  行内代码

行内代码使用\`包裹

```markdown
`<h1>一起来</h1>`
```

### 代码块

代码块使用\`\`\`包裹

```markdown
// ```
<div>
    <p>来呀~快活呀<p>
</div>
// ```
```

## 列表

### 无序列表

用 - ，+ ，* 来表示无序列表（**后面跟空格**）

```markdown
- 第一
+ 第二
* 第三
```

### 有序列表
用1.，2.， 3.，来表示有序列表

```markdown
1. 第一
2. 第二
3. 第三
```

等同于

```markdown
1. 第一
1. 第二
1. 第三
```
::: warning
不建议第二种写法，Markdown在未来可能会出现类似start的语法。
:::

## 强调

### 加粗

- `**`用来包裹表示 **加粗**

```markdown
**强调**
```

### 斜体

- `*`用来包裹表示 *斜体*

```markdown
*斜体*
```

## 链接

```markdown
[显示文本](链接地址)
```

## 删除线

```markdown
~~文本~~
```

## 上下标

```markdown
1<sub>2</sub>
1<sup>2</sup>
```
## 图片
插入图片的语法和链接的语法很像，只是前面多了一个`!`

```markdown
![](imageurl)]
```


## 引用

```markdown
> 这里是引用
```

## 表格

```markdown
|name|age|address|
|---|:----:|---:|
|zhang|18|beijing|
|wang|22|shandong|
```

### 格式化语法
- 居左 `:------`  
- 居中 `-------`或`:-----:`  
- 居右 `------:`

## 换行
两个空格  
一个回车

## 分割线

* 三个以上*，-，+组成

```markdown
=======
*******
-------
```

## 注解

* 使用[^]来表示注解

```markdown
[^2]: https://hub.docker.com/
这是注解[^2]
```

## 文字颜色

<font color="red">本身Markdown语法不支持修改文字等功能，但是支持html，所以我们可以使用html来表示</font>

```markdown
<font color="red" size="16" face="微软雅黑">这里是内容</font>
```
```markdown
//背景色须使用td标签并使用tr，table包裹
<table><tr><td bgcolor=#7FFFD4>背景颜色</td></tr></table>
```
