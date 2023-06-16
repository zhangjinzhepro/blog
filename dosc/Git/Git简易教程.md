---
layout: post
title: Git简易教程
tags: [git]
---
# git相关概念

git是一种分布式的版本控制系统。

1. 版本控制，顾名思义可以记录历史，并在需要时回退.
2. 分布式的概念是多了一个本地仓库，每一个本地仓库都存在所有的版本，过程中无需联网提交（但是到最后还是要把代码提交到中央仓库）。

## add：添加缓存区

add的作用是把`工作区`改变的代码提交到`暂存区`，以监听文件内部的改变

```js
git add <文件名>
```

add之前：

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230507121023.png)


add之后：

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230507121049.png)


**文件状态由“`未跟踪`”变成“`已暂存`”**

**add添加的为文件改变而非文件本身**

### add后面加个“.”：全部暂存

```js
git add .
```

## commit：提交

commit的作用是将暂存区的代码提交到本地仓库

```js
git commit
```

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230507121124.png)


执行之后进入到编辑页面，“`i`”键进入输入状态，键入log信息后“`Esc`”返回，两个“`ZZ`”退出

## push

将本地提交到远程仓库,本质其实是将当前的分支连同它路径上的commit一并提交到远程仓库

```js
git push <主机名> <分支名>
```

## log：信息

commit完成之后你你就成功完成了一次提交，现在查看一下刚刚提交的commit

```js
git log
```

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230507121200.png)


这里记录了commit的SHA-1，提交的作者，提交时间

### 查看具体的log信息

```js
git log -p
```

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230507121239.png)

### 查看看简单log信息

```js
git log --stat
```

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230507121300.png)

## show：信息

### 只查看当前commit信息

```js
git show
```

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230507121319.png)

### 查看某一条commit信息

```js
git show <SHA-1>
```

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230507121334.png)

### 查看某一条commit信息中的文件

```js
git show <SHA-1> <filename>
```

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230507121348.png)

## pull：拉取

`git pull` 其实是 `git fetch` 和 `git merge` 的集合，
拉取目标branch的所有commit和当前的commit合并生成一个新的commit。

```js
git pull <主机名> <分支名>
```

pull操作在一定程度上会帮你自动合并，如果一个分支改了A文件，另一个分支改了B文件，合并之后两个文件都会改，这没有问题。
如果一个分支改了A文件第一行，另一个分支改了A文件第二行，合并之后A文件第一行和第二行也都改了，这也没有问题。
**问题是如果一个分支改了A文件第一行，另一个分支也改了A文件第一行，这就出问题了，需要手动解决一下冲突。**

冲突解决完毕之后需要重新add，commit，这个时候发现git会自动帮我们填好了log信息，提交就可以

## branch：分支

git和其他版本控制系统的主要区别就是git有`branch`的概念，意思翻译为分支，实质为commits的引用


`引用`相当于commit的快捷方式，我们看到每一个`commit`都有一个SHA-1的加密值，这个值重复率极低，低到我们可以用前几个值来代替，比如我们可以用`7800ba`来代表上一次的commit，后面的`HEAD -> master`，`github/master`也是只想这个commit的引用。

### HEAD：当前分支的引用

当前分支的引用指的是`当前工作目录`对应的`commit`，当你有提交的时候，HEAD也会自动指向当前的`commit`。总之，当前`commit`在哪里，`HEAD`就在哪里，你永远可以用`HEAD`来操作当前`commit`

### branch：分支

`HEAD`除了可以引用`commit`，也可以引用一个`branch`，在指向`branch`的时候，间接的指向了对应的`commit`，当前分支被提交的时候，`HEAD`拉着对应的`branch`一起移动。

### master：默认branch

master分支是项目在被clone下来的时候默认创建的，记住：`所有的branch都是平等的`

### branch的操作

#### 创建branch

```js
git branch <分支名>
```

#### 切换branch

```js
git checkout <分支名>
```

这样是不是有点麻烦，我们可以把两步合在一起：

```js
git checkout -b <分支名>
```

这样我们就创建了一个分支并切换过去

#### 删除branch

```js
git branch -d <分支名>
```

注意：
1. 删除时要切换到其他branch进行删除
2. 删除branch只是删除commit的引用，所在branch的提交并没有删除
3. 没有合并过master的分支删除失败（出于安全考虑），换成大写`-D`就可以了

# 工作流:Feature Branching

市面上最流行的工作流

1. 假如有一个项目需要你开发功能，于是你在项目上新建了一个分支

```js
git checkout -b zhang
```

2. 开发完毕之后你可以推送到远程分支上去：

```js
git push origin zhang
```

3. 然后你告诉同事说可以review一下你的代码，同事说可以，所以你同事就：

```js
git pull
git checkout zhang
```

4. 同事说看了没问题，可以合并到master。
于是你就把zhang合并到master上去。
如果同事说有问题，你可以修改代码重复流程`2`。

```js
git checkout master
git pull
git merge zhang
```


最后推送到远程仓库并删除分支：

```js
git push
git branch -d zhang
git push origin -d zhang // 远程仓库的 branch 也删了
```

# git 高级进阶

这里就粗略罗列一下命令和作用，详细的请自查。

## rebase：重设基础点

```js
git rebase 目标分支
```

将当前的branch的基础点移动到目标分支。
这么做的好处是：主干master明确。

不过`rebase`之后master并没有跟随过去，需:

```js
git checkout master

git merge 刚刚的分支
```

这样master就和分支合并了。


## 刚刚的提交提错了，想要修改怎么办

修改好之后使用 `--amend`

```js
git add 文件
git commit --amend -m '说明'
```
这会产生一个新的`commit`并替换掉最后一个`commit`

## 错了的是倒数第二个commit，不是最后一个commit，还能修改吗？

当然可以，这里可使用交互式`rebase`, 参数：`-i`

```js
  git rebase -i HEAD^^
```

这里的`^^`意思是后退几个`commit`，数量为`^`的数量,也可以写成`~2`,数字代表后退的数量。

回车之后，我们发现进入到了一个可编辑的页面，值得注意的是，上面的`commit`排序是倒叙的，也就是说，我们想要修改的倒数第二个`commit`，在这里是以一个，我们可以看到前面有一个`pick`，我们按`i`进入编辑，把想要重新修改的commit前面的`pick`改成`edit`,退出界面之后我们可以看到状态就是在当前的`commit`上了，修改完成之后时候使用`--amend`提交，成功之后我们可以通过`git rebase --continue`来跳过不需要修改的`commit`，整个过程就结束了。

## diff

用来对比修改

```js
  git diff //对比工作区和暂存区
  git diff --staged // 对比暂存区和那一次提交
  git diff HEAD // 对比工作区和上一次提交

```

## 想要暂存工作区？

```js
  git stash
```

 暂存并清空工作目录,注意：这并不会暂存你未追踪的文件，假如说你新建了一个文件，你还没有来得及`add`就`stash`，这个文件并不会存起来，想要把这些文件一起暂存使用`-u`，恢复文件请使用`git stash pop`命令。



## 想要回滚commit?

`reset`可以重置`HEAD`和`branch`的位置

```js
  git reset 分支名||SHA-1
```

参数：`--hard`

不保留工作区，你的工作区会被清空！！

参数：`--soft`

保留工作区和暂存区

参数：`--mixed` 默认

把工作区和暂存区全部保存为工作区
