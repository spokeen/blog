---
typora-root-url: ..\..\.vuepress\public
---

# 脚本接口列表

------

[[TOC]]

------

### 脚本

- 执行环境是 `node` 的某个版本，所以脚本可以按照 `node` 语法来编写

#### 在哪能定义脚本

![excute](/postman/excute.png)

#### 脚本执行顺序

```markdown
COLLECTION pre-request script -> 
	FOLDER pre-request script ->
		REQUEST pre-request script ->
			request	-> // 发送请求
			response  -> // 收到响应
		COLLECTION test script ->
	FOLDER test script ->
REQUEST test script
```

### Cookie

```javascript
// 1、创建一个 cookie 对象
const cookieJar = pm.cookies.jar();
// 2、添加 cookie 键值对
cookieJar.set('postman-echo.com', 'cookie_name', 'cookie_value');
cookieJar.set('postman-echo.com', {
   cookie_name2: 'cookie_value2'
})
// 3、获取 cookie 值
cookieJar.get('postman-echo.com','cookie_name');
cookieJar.getAll();
// 4、删除 cookie 值
cookieJar.unset('postman-echo.com', 'cookie_name');
cookieJar.clear();
```

### Tests 定义脚本

- 对响应的数据进行校验
- 遵循 `chai` BDD 规范

#### 编写测试用例

```javascript
// 1、将响应转换成对象
const responseJson = pm.response.json();
// 2、编写测试用力
pm.test("Person is Jane", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.name).to.eql("Jane");
  pm.expect(responseJson.age).to.eql(23);
  // 判断 header 相关的信息
  pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');
  // 判断 cookie 
  pm.expect(pm.cookies.get('isLoggedIn')).to.eql('1');
});
```

### 内置动态变量

- 所谓动态变量，是指其值是动态生成的
- [内置变量列表](https://learning.postman.com/docs/writing-scripts/script-references/variables-list/)

### 内置库

#### 使用

```javascript
let path = require('path');
```

#### node 库

- 各个库的使用可以到 [node](https://nodejs.org/docs/latest-v15.x/api/) 官网上查看

- path、assert、buffer、util、url、punycode、querystring、string-decoder、stream、timers、events

#### 其它库

- 各个库的使用可以到 [npm](https://www.npmjs.com/) 上搜索

- ajv、atob、btoa、chai、cheerio、crypto-js、csv-parese/lib/sync、lodash、moment、postman-collection、tv4、uuid、xml2js

> 注：通过内置的 _ 获取 lodash@3.10.1 的引用，通过 require('lodash') 获取最新版本

