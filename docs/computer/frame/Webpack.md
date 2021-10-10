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

- 作用：设置打包过程一个或多个起点。
- 单页应用(SPA)：一个入口起点；多页应用(MPA)：多个入口起点。
- 用法

```
module.exports = {
	// 方式一： 字符串
	entry: './index.js', // 使用相对路径，基于 context 的值
	// 方式二： 对象
	entry: {
		index: {
			import: './index.js',
			// index 和 entry 公用一个 react-vendors，而不会各自包含
			// dependOn 可以是字符串 或 数组
			dependOn: 'react-vendors'
		},
		'react-vendors': ['react', 'react-dom']
		entry: {
			import: './entry.js',
			// 指定输出文件的命名
			filename: 'pages/[name][ext]',
			dependOn: 'react-vendors'
		}
	},
	// 方式三： 数组
	entry: [
		'./index',
		'./entry'
	]
}

传入字符串和数组， chunk 命名为 main；如果是对象，则属性的 key 就是 chunk 的名字。
```



## 完整配置

```
module.exports = {
	mode: 'production',
	
}
```

