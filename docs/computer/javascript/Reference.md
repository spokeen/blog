---
sidebarDepth: 4
---
# JavaScript Reference

### 目录

- [canvas 2d](#canvas-2d)
  - [路径样式](#路径样式)
  - 绘制路径
  - 路径描边
  - 填充
  - 文本
  - 图层合成
  - 阴影
  - 上下文
  - 坐标系
  - 创建对象
  - 判断
  - [重置](#重置)
- [webgl](#webgl)
- [webgl2](#webgl2)

------

### canvas 2d

获取 `CanvasRenderingContext2D` 上下文

```javascript
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
```

canvas：返回 `CanvasRenderingContext2D`  对应的 canvas 元素

#### 路径样式

##### lineCap：线条端点的样式，[detail](../examples/canvas2d/路径样式.md)

```markdown

```

lineJoin：线条转角的样式

lineWidth：线条宽度

clip()：路径剪裁

drawFocusIfNeeded(element)：让当前路径或指定路径轮廓高亮

getLineDash()：获取当前虚线的样式

setLineDash(segments)：设置虚线样式

lineDashOffset：虚线距离起点的偏移距离

miterLimit：用来显示 `lineJoin` 为 `miter` 时尖角的长度

#### 绘制路径

beginPath()：开始新的路径

closePath()：闭合路径，将路径最后位置和起始点直线相连

moveTo(x, y)：设置路径绘制的起始点

arcTo(x1, y1, x2, y2, radius)：给路径添加圆弧

bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)：绘制贝塞尔曲线

quadraticCurveTo(cpx, cpy, x, y)：绘制二次贝塞尔曲线

lineTo(x, y)：用直线连接最后路径点和指定的点

arc(x, y, radius, startAngle, endAngle [, anticlockwise])：绘制圆弧路径

ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)：绘制椭圆路径

rect(x, y, width, height)：绘制矩形路径

#### 路径描边

strokeStyle：描边的样式

stroke()：路径描边

strokeRect(x, y, width, height)：矩形描边

strokeText(text, x, y [, maxWidth])：文本描边

#### 填充

fillStyle：各种图形的填充样式

fill()：路径填充

fillRect(x, y, width, height)：矩形填充

fillText(text, x, y [, maxWidth])：文字填充

putImageData(imagedata, dx, dy)：将 ImageData 对象的数据绘制到 canvas 上

drawImage(image, dx, dy)：绘制图片

#### 文本

font：文本绘制时的字号、字体

textAlign：绘制时，文本的对齐方式

textBaseline：绘制时，文本的对齐基线

measureText(text)：获取文本的一些测量数据

#### 图层合成

globalAlpha：画布全局透明度

globalCompositeOperation： canvas 图形的混合模式

#### 阴影

shadowBlur：指定阴影的模糊程度

shadowColor：阴影的颜色

shadowOffsetX：阴影的水平偏移

shadowOffsetY：阴影的垂直偏移

#### 上下文

restore()：依次从栈顶弹出存储的 canvas 上下文

save()：将当前 canvas 上下文 push 到栈中

#### 坐标系

rotate(angle)：旋转坐标系

scale(x, y)：缩放坐标系

translate(x, y)：平移坐标系

setTransform(a, b, c, d, e, f)：重置当前坐标系，再进行变换

transform(a, b, c, d, e, f)：在当前坐标系的基础上进行变换

#### 创建对象

createImageData(wdith, height)：创建一个空的 ImageData 对象

getImageData(sx, sy, sWidth, sHeight)：返回一个包含 canvas 像素点信息的 ImageData 对象

createLinearGradient(x0, y0, x1, y1)：创建渐变对象

createPattern(image, repetition)：创建图案对象

createRadialGradient(x0, y0, r0, x1, y1, r1)：创建径向渐变

#### 判断

isPointInPath(x, y)：检测某个点是否在路径内(包含)

isPointInStroke(x, y)：检测某个点是否在路径上

#### 重置

clearRect(x, y, width, height)：将一块矩形区域还原到初始状态



### webgl

```

```

### webgl2

```

```















