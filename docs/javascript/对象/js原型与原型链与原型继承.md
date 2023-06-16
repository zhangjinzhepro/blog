---
layout: post
title: js原型与原型链与原型继承
tags: [javascript]
---

js中对象分为`普通对象`和`函数对象`，区别在于，`普通对象`的`__proto__`属性直接指向`Object.prototype`，所以对我们来说，讨论普通对象的原型并没有意义，下面我们主要讨论的是`函数对象`。

`函数对象`(也叫构造函数的实例)，顾名思义是由函数构造的对象

```js
  function Person () {}
  var person = new Person()

  console.log(typeof person)
  // object
```

我们可以用一个图来学习：

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230507164900.png)

接下来我们来了解与原型有关的几个属性：

## 原型

### 1. `prototype`

*函数才会有prototype*

```js
  function Person () {}

  Person.prototype.name = 'zhang'

  var person = new Person()

  console.log(person.name);
  // zhang
```

每一个`构造函数`都会有一个`prototype`属性，他指向了`该构造函数的原型对象`

更新图片

<img width="472" alt="prototype2" src="https://user-images.githubusercontent.com/38930476/78467323-13acf080-773e-11ea-8376-5874e8372517.png">



### 2. `constructor`

`构造函数`的`prototype`指向了`该构造函数的原型`，那反过来构造函数的原型有没有指向构造函数的属性呢，答案是有的，就是`constructor`

```js
  function Person () {}

  var person = new Person()

  console.log(Person.prototype.constructor === Person);
  // true
```
更新！

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230507164923.png)


### 3. `__proto__`

*对象才会有__proto__*

`实例对象`有一个`__proto__`属性，他指向了`该构造函数的原型对象`

```js
  function Person () {}

  var person = new Person()

  console.log(person.__proto__ === Person.prototype);
  // true
```

**这就是原型链的开始！**

更新！

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230507164939.png)


## 原型链

原型对象也是对象，所以`Person.prototype`也会有`__proto__`属性，
`Person.prototype.__proto__`指向的是`Object.prototype`，也就是构造函数的终点，因为`Object.prototype.__proto__ === null`。

在对象中，查找变量的方式是从自身开始，如果没有就查找原型，原型再没有就查找原型的原型...,如果查找到就停止，如果没有就直到查找到`null`结束。

```js
  function Person () {}

  Person.prototype.name = 'zhang'

  var person = new Person()

  console.log(person.name);
  // zhang
```


更新！

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230527103856.png)

**图中绿色的线为原型链**


## 原型继承

原型继承是js继承方法的一种，也是用的最多的一种。

```js
  function Person(name, age) {
      this.name = name
      this.age = age
    }

    function Gender(gender) {
      this.gender = gender
    }

    Person.prototype = new Gender('男')

    Person.prototype.constructor = Person

    var a = new Person("zhang", 12)

    console.log(a.gender);
    // 男
```

原型继承的方法只需要将要继承的构造函数挂载到原构造函数的`prototype`上，这样一来，在对象里找不到变量的时候，变会去找该对象的`__proto__`属性，也就是`Person.prototype`。

*这里有一个问题就是我们在给`Person.prototype`赋值的时候，`constructor`属性也一并带过去了，这就会出现`Person.prototype.constructor === Gender`的现象，但这明显是不合理的，所以在12行，重新使`Person.prototype.constructor`指向`Person`，这样我们再回溯整个原型链的时候不至于混乱。*
