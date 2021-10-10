# Webpack

------

[[TOC]]

------

## 版本

- webpack5，无特别说明，默认都是 webpack5

## 配置文件

### 默认值

- 默认配置文件是 **webpack.config.js**
- 默认项目入口文件 **src/index.js** , 默认输出到 **dist/main.js**，在生产环境开启压缩和优化

### 手动指定配置文件

```shell
webpack --config dev.config.js
```

### 详细的配置属性介绍

#### mode

- 作用：用来设置 `process.env.NODE_ENV` 的值
- 默认值：`production`
- 用法

```
// package.json
webpack --mode=development
// webpack.config.js
module.exports = (env, argv) => {
	console.log(argv.mode);
}
```

#### context

- 作用：设置 entry 和 loader 的相对路径

```
module.exports = {
	context: path.resolve(__dirname, 'src')
}
```

#### entry

- 

## 完整配置

```
module.exports = {
	mode: 'production',
	
}
```

