# Mocha

------

[[TOC]]

------

## 使用

### 安装

```shell
npm install -D mocha
```

## 使用

### 测试同步代码

```javascript
const expect = require('chai').expect
describe('Array', function() {
    describe('#indexOf', function() {
        it('shuold return -1 when value is not present' , function() {
            expect([1,2,3].indexOf(4)).equal(-1);
            expect([1,2,3].indexOf(0)).equal(-1);
        })
    })
})
```

## 钩子

- before

## 注意事项

- 不要使用箭头函数



## 概念

### TDD

- 全称：Test-Driven Development，测试驱动开发
- 是一种方法论，其核心思想是在正式编写需求代码功能的代码之前，先编写单元测试代码，再编写需求功能代码满足这些单元测试代码
- 单元测试关注点通常是一个对象或模块中的函数；但是在有限的时间内，不可能覆盖所有的代码，通常是针对核心的功能编写详细的单元测试

### BDD

- 全称：Behavior-Driven Development，行为驱动开发
- 是针对功能级的一种测试，用描述性语言描述功能是否完整