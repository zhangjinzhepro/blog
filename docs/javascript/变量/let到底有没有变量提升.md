---
layout: post
title: let到底有没有变量提升
tags: [javascript]
---

## age变量看起来确实被提升了

![WX20210121-164758](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/234147669-854ef6d0-29eb-40ab-afc8-e72bc0ea1653.png)

## 声明变量的时候都发生了什么？

### var声明

```js
function fn(){
  var x = 1
  var y = 2
}
fn()
```

1. 创建一个fn的[[Scope]]
2. 在fn作用域里创建x、y变量
3. 将x、y初始化为undefined
4. 执行

### function声明
```js
fn2()
function fn2(){
  console.log(2)
}
```

1. 找到fn2声明的变量，并在环境中创建这些变量
2.将变量fn2初始化并赋值为function(){console.log(2)}
3. 执行

### let声明
```js
{
  let x = 1
  x = 2
}
```

1. 找到所有let声明的变量，并在[[Scope]]中创建这些变量。
2. 开始执行代码
3. x = 1，将x初始化为1（如果是let x，就初始化为undefined）
4. x = 2，将x赋值为2

## 结论

let的创建过程被提升了，但初始化没有被提升，所以在let变量还没有初始化之前不能使用（暂时死区）。

![v2-9c8c4a0a3ce5402b1a74f488d79c74d0_720w](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/234147850-4a35f80f-24b9-43cd-92da-8b53424cc53f.png)
