---
layout: post
title: webApp本地真机调试
tags: [工程化]
---
一般我们开发webApp习惯用chrome控制台自带的手机模拟器，这没什么不好的，只不过在调试某些功能是会受限制：

-   chrome并不能完成完美的调用摄像头，调用录音等原生功能
-   chrome有时不能完美的演示手机样式问题

所以就有了本地真机调试的想法，在网上大概搜了一下，结合自己的实践整理出来

**必需:**

1.  装有桌面版chrome的Android手机
2.  装有chrome的PC

**步骤：**

1.  手机连接电脑打开并同意usb调试。
2.  f12进入控制台选择more tools下的remote devices,出现小绿点说明已经连接成功。
3.  接下来添加规则，如图所示，你的本地服务起在哪的端口上就添加哪个。

![image.png](https://cdn.jsdelivr.net/gh/yunshen-1995/pic-bed@main/img/20230507120557.png)


4.  接下来在手机桌面chrome里输入你的本地服务地址就可以看到画面了。
