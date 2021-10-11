# 选择器

------

[[TOC]]

------

## 选择器

### 相邻兄弟选择器

```css
// p 和 img 有相同父元素，且 img 并列在 p 的后面，img 就会被选中
p + img {}
```

### 属性选择器

```css
// 存在 attr 属性的 a 元素
a[attr] {}
// 选中属性 attr 值为 value 的 a 元素
a[attr=value] {}
// 选中属性 attr 值列表中有一个是 value 的 a 元素
a[attr~=value]{}
// 选中 attr 值为 value 或以 value- 开头的 a 元素
a[attr|=value]{}
// 选中 attr 值为 value 开头的 a 元素
a[attr^=value]{}
// 选中 attr 值为 value 结尾的 a 元素
a[attr$=value]{}
// 选中 attr 值包含 value 的 a 元素
a[attr*=value]{}
```

### 子选择器

```css
// 选中 parent-element 的直接后代 child-element
parent-element > child-element {}
```

### 类选择器

```
.class-name {}
```

### 后代选择器

```css
// 选中 parent 元素所有的后代元素 child(包括)
parent child {}
```

### 兄弟选择器

```
// 选择 div 元素之后所有同层 p 元素
div ~ p {}
```

### id 选择器

```css
#id {}
```

### 选择器列表

```
# 如果某一个选择器不被支持，那么整个规则都将失效
h1,
h2 {}
```

### 元素选择器

```css
div {}
```

### 通配符选择器

```
// 选中所有元素
* {}
```

## 伪类

- 是添加到选择器的关键字，指定要选择元素的特殊状态

### 交互式伪类

```
:active -> 
```





