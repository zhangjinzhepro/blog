# http

http是基于TCP/IP的应用层通信协议，用于定义客户端和服务器之间的通信规则。

## http/0.9（1991）

http第一个有记录的版本是1991年提出的`http/0.9`，他是有史以来简单的协议。

- 无请求头
- 只支持`GET`方法
- 只能返回`HTML`

```bash
GET /index.html
```
服务器可能返回以下信息

```bash
(res body)
(connection closed)
```

## http/1.0（1996）

`http/1.0`相比`http/0.9`进步巨大。

- 支持请求头和响应头（包括状态码、缓存、授权、字符集等）
- 额外支持`HEAD`和`POST`方法
- 支持更多的响应格式如视频、文本、图像等

> [!warning]
> http/1.0的主要缺点之一就是每个连接不能有多个请求。对于任何一个请求，都必须建立在新的连接上，会因为三次握手导致性能浪费。
> 
```bash
GET /index.html HTTP/1.0
Host: jinzhe.cc
Accept: */*
```
服务器可能返回以下信息

```bash
HTTP/1.0 200 OK 
Content-Type: text/plain
Server: Apache 0.84

(res body)
(connection closed)
```


## 三次握手

- SYN：
- SYN+ACK
- ACK

```swimlanes-io
客户端 -> 服务端 : SYN `x = random()`
note:客户端发送随机数`x`
服务端 -> 客户端 : SYN+ACK `y = random()`；`x+1`
note:服务端返回随机数`y`和`x+1`
客户端 -> 服务端 : ACK `y+1`
note:客户端发送`y+1`
客户端 -> 服务端 : 开始发送数据
```

## http/1.1（1997）

