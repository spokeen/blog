---
typora-root-url: ..\..\.vuepress\public
---

# postman

目录

- 版本
- 发送请求
  - 发送查询参数的请求
  - 发送路径参数的请求
  - 发送请求体
  - 发送请求头
  - 发送cookie
- 接受请求

------

### 版本

本文以 `V9.0.5` 的 **postman** 来编写的，没有特别说明，均以这个版本为准

### 发送请求

#### 发送查询参数的请求

![](/postman/sendQueryParameter.png)

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

### 接受请求

- Save Reponse：保存请求响应，方便下次查看
- Prview：类似浏览器来呈现结果
- 球形 icon：可以查看 ip

![receiveResponse](/postman/receiveResponse.png)

