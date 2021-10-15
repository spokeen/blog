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

## 三、路由

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

3、路由路径

```
// 方式一：字符串
app.get('/somepath', function(req, res) {})

// 方式二：正则，将匹配 butterfly dragonfly 等等
app.get(/.*fly$/, function(req, res) {})
```

4、路由参数

```
app.get('/parameter/:name', function(req, res) {
    console.log(req.params['name']);
    res.send('parameter');
})
```

5、路由处理函数

```
// 用法一：基础用法
app.get('/app', function(req, res){});

// 用法二：链式调用
app.get('/chain', function(req, res, next) {next()}, function(req, res){})
app.get('/chain2', [callback1, callback2])

// 用法三：链式调用2
app.get('/echa', function(req, res, next) {
	next('route'); // 流程转到另一个路由
})
app.get('/route', function(req, res) {});
```

6、发回响应

`res.download()` ，文件下载

```
const path = require('path');
// 第一个参数：是一个绝对文件路径
// 第二个参数：下载文件的名称
res.download(path.join(__dirname, '../public/image/29.jpg'), 'demo.jpg');
```

`res.end()` ，终止响应处理

```
// 调用后，就不能再发送数据了
res.status(500).end();
```

`res.json()`，响应一个 json

```
res.json({
	data:data
})
```

`res.jsonp()` ，类似 json()，默认的回调名是 `callback`

```
res.jsonp({data:'data'})
// => callback({"data": "data"})

// 修改回调名
app.set('jsonp callback name', 'cb');
```

`res.redirect()`，重定向

```
res.redirect('/foo/bar');
// 可以任何有效的 URI
```

`res.render()`，渲染视图模板

```
res.render(view [, locals] [, callback])
```

`res.send()`，发送不同类型的响应

```
// someData 可以是 Buffer、String、Object、Boolean、Array
res.send(someData);
```

`res.sendFile()`，发送文件

```
res.sendFile(path.join(__dirname, '../public', 'index1.html'));
```

`res.sendStatus`，发送状态码和状态码描述

```javascript
res.sendStatus(200); // <=> res.status(200),send('OK');
```

7、嵌套路由

```javascript
// user.js
const express = require('express');
let router = express.Router();

// 使用中间件
router.use(function(req, res, next) {
	next();
})

// 添加路由
router.get('/info', function(req, res) {});

module.exports = router
```

```
// index.js
const userRouter = require('./user.js');

app.use('/user', userRouter); // => 访问 /user/info
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

## 五、中间件

中间件是一个传入  request, response, next 的函数。

1、中间件能做什么

- 执行任何代码
- 修改 request 和 response 对象
- 通过 next() 调用下一个中间件
- 发送响应

2、编写中间件

```
var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

// 可配置的中间件
var myLoggerPlus = function( options ) {
	return function(req, res, next) {
		console.log('logger plus', options);
		next();
	}
}
```

3-、使用中间件

```
// 1、应用级层面中间件，起始 app.get() 也是一种应用级层面中间件，如果没有指定挂在路径，每次收到请求就会执行
app.use(muLogger);
app.use('/logger', myLogger); // 访问 /logger 才会执行中间件
// 使用可配置中间件
app.use(myLoggerPlus({name:'dd'}));

// 2、路由层级的中间件
var router = express.Router()
router.use(muLogger);
router.use('/logger', myLogger);

// 3、错误处理中间件
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

4、内置中间件

- express.static，静态资源文件
- express.json，解析携带 JSON 数据的请求
- express.urlencoded，解析 url

5、[第三方中间件列表](https://www.expressjs.com.cn/resources/middleware.html)

