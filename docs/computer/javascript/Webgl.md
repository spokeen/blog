---
typora-root-url: ..\..\.vuepress\public
---

# Webgl

------

[[TOC]]

------

### 介绍

- webgl：Web Graphics Library，是一款 **栅格化**  引擎，通过绘制绘制 点、线、三角形 来实现各种复杂的图形

- webgl 是基于  **OpenGL ES 2.0** 开发的
- 控制代码由 javascript 编写，由 CPU 执行；阴影代码由 GLSL (GL Shader Language) 编写，包括两个方法：**vertext shader** 和 **fragment shader** 构成，在GPU上 执行

### 获取 webgl 上下文

```javascript
let canvas = document.querySelector('#canvas')；
let webgl = canvas.getContext('webgl');
```

### shader

- webgl 的工作主要就是设置 **vertex shader** 和 **fragment shader** 的状态

#### vertex shader

- 主要工作：计算顶点的位置

#### fragment shader

- 主要工作：计算颜色和像素

#### 获取数据

- 属性 和 缓冲
- 全局变量
- 纹理
- 可变量

### 坐标轴

![clipspace](/webgl/clipspace.png)

