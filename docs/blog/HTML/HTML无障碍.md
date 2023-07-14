# [WAI-ARIA](https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility)

它是通过浏览器和一些辅助技术丰富我们的语义化的技术，是面向屏幕阅读器和其他设备使用者的技术。

**当你需要的时候再使用无障碍特性！**

## 角色

这定义了元素是干什么的。

例如 `role="banner"`, `role="search"`, `role="tabgroup"`, `role="tab"`。

## 属性

通过定义一些属性给元素，让他们具备更多的语义。

例如： `aria-required="true"`，`aria-labelledby="label"`允许你在元素上设置一个 ID，用于`labelledby`引用作为屏幕阅读器指定的 label 内容，多个也可以。

## 状态

用于表达元素当前的条件的特殊属性。
例如`aria-disabled="true"`
