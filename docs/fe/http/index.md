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
服务器返回以下信息

```bash
(res body)
(connection closed)
```

## http/1.0（1996）



