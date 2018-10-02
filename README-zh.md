# lst-get

[![NPM][img-npm]][url-npm]

[![Build Status][img-travis]][url-travis]
[![Language][img-javascript]][url-github]
[![License][img-mit]][url-mit]
![Size][img-npm-min]

[English](./README.md) | [中文](./README-zh.md)

可能是世界上最轻量的获取对象值的包，不管你的嵌套有多深。压缩之后小于 **0.3K**。

## 特点
- 轻量简单
- 获取任意深层次嵌套值
- 可执行函数, 形如 `lstGet(obj, 'a.f()')`
- 当没有值的时候，可以设置默认值

## 安装
```bash
npm install lst-get --save
```

## 使用
```javascript
// 对象
var obj = {
  a: {
    b: [
      {
        c: 'foo'
      }
    ],
    f: function(){
      return 'fn-foo'
    },
    f2: function(){
      return {
        d: 'fn-bar'
      }
    }
  }
}


// 未使用之前，糟糕的代码，又深又长的逻辑判断
var value = obj.a && obj.a.b && obj.a.b[0] && obj.a.b[0].c


// 现在，更简洁好用
var lstGet = require('lst-get')

lstGet(obj, 'a.b[0].c') //=> 'foo'
lstGet(obj, 'a.b[0].c.e', 'defaultValue') //=> 'defaultValue'
lstGet(obj, 'a.f()') //=> 'fn-foo'
lstGet(obj, 'a.f2().d') //=> 'fn-bar'
```


## 参数
### (object, expression, defaultValue)

| 参数 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| object | `object` | `true` | 对象 |
| expression | `string` | `true` | 表达式 |
| defaultValue | `*` | `false`| 默认值，当没有返回值时使用默认值 |

## 协议

[![license][img-mit]][url-mit]


[url-github]: https://github.com/ChanceYu/lst-get
[url-npm]: https://www.npmjs.com/package/lst-get
[url-travis]: https://travis-ci.org/ChanceYu/lst-get
[url-mit]: https://opensource.org/licenses/mit-license.php

[img-npm]: https://nodei.co/npm/lst-get.png?compact=true
[img-travis]: https://travis-ci.org/ChanceYu/lst-get.svg?branch=master
[img-javascript]: https://img.shields.io/badge/language-JavaScript-brightgreen.svg
[img-mit]: https://img.shields.io/badge/license-MIT-blue.svg
[img-npm-min]: https://img.shields.io/bundlephobia/min/lst-get.svg