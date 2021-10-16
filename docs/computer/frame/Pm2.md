# pm2

------

[[TOC]]

------

pm2 是一个守护进程，用来管理应用程序

## 一、安装

```shell
npm install -D pm2
```

## 二、管理应用程序

1、启动应用程序

```
pm2 start ./src/index.js
```

启动命令传入的参数

```
--name <app_name> // 指定应用的名字
--watch // 当文件内容改变重启应用
--log <path> // 指定日志文件位置
--time // 每条日志记录加上时间戳
--no-autorestart // 不自动重启应用
```

2、重启应用

```
pm2 restart app_name 或 id
```

3、重新加载应用

```
pm2 reload app_name 或 id
```

4、停止应用

```
pm2 stop app_name 或 id
```

5、删除应用

```
pm2 delete app_name 或 id
```

