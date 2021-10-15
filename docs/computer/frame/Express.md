# Express

------

[[TOC]]

------

`express` 是一个基于 node.js 的 web 开发框架。

## 环境

express@4.7

node@16.7

## 一、安装

创建项目并初始化

```shell
mkdir myapp
cd myapp
npm init
```

安装 express 依赖

```shell
npm install -S express
```

## 二、跑起来

```
const express = require('express');

const app = express();

// 设置响应的路由
app.get('/', function(req, res) {
    res.send('hello world');
})

// 启动服务，并监听 3000 端口
app.listen(3000, function() {
    console.log('启动成功');
})
```

### 三、路由

路由由 URI 和请求方法构成，它决定了服务器如何响应客户端的请求。

1、路由的格式

```javascript
/*
app 是 express 的实例
method 是小写的 http 请求方法
path 是请求路径
callback 定义如何响应客户端请求
*/
app.method(path, callback)
```

2、添加路由

```
// get 方法
app.get('/get', function(req, res) {});
// post 方法
app.post('/post', function(req, res){});
// 接受所有方法的请求
app.all('/all', function(req, res){});

```

## 四、访问静态资源

目录结构

```
public
--css
----style.css
--image
----demo.png
file
--demo.txt
src
--index.js
package.json
```

启用静态资源中间件

```
// index.js
// 相对地址是基于启动 node 应用的目录，推荐使用绝对目录
app.use(express.static('static'));
// 访问
http://localhost:3000/image/demo.png
```

多次使用静态资源中间件

```
// index.js

const path = require('path');

//方式一：
app.use(express.static('public'));
app.use(express/static('file'));
// 访问，会先去 public 查找，再去 file 查找，根据目录添加顺序进行查找
http://localhost:3000/image/demo.png

// 方式二：
app.use('/static', express.static(path.join(__dirname, '..', 'public')));
app.use('file', express/static('file'));
// 访问
http://localhost:3000/public/image/demo.png
http://localhost:3000/file/demo.txt
```

