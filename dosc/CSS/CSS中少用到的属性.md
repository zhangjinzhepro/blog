---
layout: post
title: CSS中少用到的属性
tags: [css]
---

## aspect-ratio

规定盒子的纵横比。

```css
aspect-ratio: 1 / 1;
aspect-ratio: 16 / 9;
aspect-ratio: 0.5;
```

## max / min

选择最大值 / 最小值。

```css
width: max(10vw, 4em, 80px);
width: min(10vw, 4em, 80px);
```

## object-fit

可替换元素（例如：[`<img>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 或 [`<video>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)）的内容应该如何适应到其使用高度和宽度确定的框。

```css

object-fit: contain; /* 缩放 */
object-fit: cover; /* 保持宽高比填充 */
object-fit: fill; /* 不保持宽高比填充 */
object-fit: none; /* 不变 */
object-fit: scale-down; /* none和contain二选一 */
```

## scroll-behavior

当用户手动导航或者 CSSOM scrolling API 触发滚动操作时的滚动样式

```css
scroll-behavior: auto; /* 直接跳转 */
scroll-behavior: smooth; /* 平滑 */
```

