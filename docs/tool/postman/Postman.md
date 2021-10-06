---
typora-root-url: ..\..\.vuepress\public
---

# postman

------

[[TOC]]

------

### 版本

本文以 `V9.0.5` 的 **postman** 来编写的，没有特别说明，均以这个版本为准

### 发送请求

#### 发送查询参数的请求

![sendQueryParameter](/postman/sendQueryParameter.png)

#### 发送路径参数的请求

![sendPathParameter](/postman/sendPathParameter.png)

#### 发送请求体

- form-data：发送键值对、文件等数据
- x-www-form-urlencoded：在发送前对键值对数据编码
- raw：手写发送数据，可以使用变量
- binary：发送视频、音频、图片等二进制文件
- GraphQL：发送 graphql

![](/postman/sendRequestBody.png)

#### 发送请求头

![](/postman/sendRequestHeader.png)

#### 发送cookie

![sendCookie](/postman/sendCookie.png)

#### 批量流水线发送请求

![runner](/postman/runner.png)

### 接受请求

- Save Reponse：保存请求响应，方便下次查看
- Prview：类似浏览器来呈现结果
- 球形 icon：可以查看 ip

![receiveResponse](/postman/receiveResponse.png)

#### Visualize 结果可视化

- 在脚本里定义可视化模板，模板必须是一个字符串，你可以使用 *html*, *css*, *javascript* 来定义模板；通过 `#each` 访问每条数据

```javascript
var template = `
	<link></link>
	<style></style>
	<script></script>
    <table bgcolor="#FFFFFF">
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>
		<!-- 遍历集合 -->
        {{#each response}}
            <tr>
                <td>{{name}}</td>
                <td>{{email}}</td>
            </tr>
        {{/each}}
    </table>
`;
```

- 导入数据

```javascript
pm.visualizer.set(template, {
    response: pm.response.json()
});
```

### 变量

#### 类型

- 全局变量：在某个`工作空间`内可以访问
- 集合变量：在某个`集合`内可以访问
- 环境变量：需要导入才能访问
- 局部变量：只能在脚本内访问
- 数据变量：

#### 定义变量

##### 定义全局变量和环境变量

![variable](/postman/variable.png)

##### 定义集合变量

![collectionVariable](/postman/collectionVariable.png)

##### 在请求脚本里定义变量

```javascript
// 定义全局变量
pm.globals.set("variable_key", "variable_value");
// 定义集合变量
pm.collectionVariables.set("variable_key", "variable_value");
// 定义环境变量
pm.environment.set("variable_key", "variable_value");

// 删除全局变量
pm.environment.unset("variable_key");
```

#### 引入变量

![importVariable](/postman/importVariable.png)

#### 使用变量

- 变量以 {{}} 包裹，能自定义内容的地方都能用变量

![useVariable](/postman/useVariable.png)

