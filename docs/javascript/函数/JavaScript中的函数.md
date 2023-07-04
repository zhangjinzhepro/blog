# JavaScript中的函数

## 一等公民

JavaScript中函数可赋值，可传参，可作为返回值，可有属性。

**如果某个编程语言中的函数，可以和其他数据类型做一样的事，函数就是一等公民。**

## 函数声明与函数表达式

_在V8内部，处理函数声明和处理函数表达式是两种不同的方式。_

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230508163511.png)

### 函数声明

函数声明本质是语句

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230508163522.png)

### 函数表达式

函数表达式本质是表达式，**表达式是在执行阶段被执行**

```js
foo()
var foo = function (){
    console.log('foo')
}

===
   
var foo = undefined  // 被默认为undefined
foo = function (){
    console.log('foo')
}
```

## 值传递

JavaScript中所有函数的参数都是按值传递的。

```js
var obj1 = {
	value: 10
}
function change(obj){ //创建一个obj私有变量，相当于 var obj = obj1
	obj.value = 20 // 此时 obj 和 obj1 指向了同一个堆地址
	obj = { // 将obj指向了另外一个堆地址，此时 obj 和 obj1 无任何关系。如果为引用传递那obj1也将改变
		value: 30
	}
	return obj
}
var obj2 = change(obj1)
console.log(obj1) // 20
console.log(obj2) // 30
```

## V8如何管理函数？

使用栈来管理函数调用

因为被调用者的生命周期始终小于调用者（后进先出）

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230508163304.png)

函数在执行过程中，其内部的临时变量会按照执行顺序被压入到栈中

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230508163322.png)

## V8如何解析函数？

在V8内部，会为函数对象添加两个隐藏属性（`name`，`code`），以提供调用功能

- `name` 默认值为 `anonymous`
- `code` 是以字符串的形式存储在内存中

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230508163452.png)

## 闭包

因为 `foo` 函数的返回值 `bar` 包含了 `foo` 的作用域及变量，所以 `test` 在 `foo` 函数执行之后并不会销毁

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230508163501.png)

## 作用域

```js
var name = '极客时间'
var type = 'global'
function foo(){
    var name = 'foo'
    console.log(name) // 极客时间
    console.log(type) //  global ？？？
}
function bar(){
    var name = 'bar'
    var type = 'function'
    foo()
}
bar()
```
函数声明会在编译阶段提升到作用域中（变量提升），变量 `x` 被默认为 `undefined`，`foo` 函数被保存在内存中以供使用。

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230508163552.png)

