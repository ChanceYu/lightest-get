# lst-get

[![NPM][img-npm]][url-npm]

[![Build Status][img-travis]][url-travis]
[![Language][img-javascript]][url-github]
[![License][img-mit]][url-mit]
![Size][img-npm-min]

Maybe the lightest package to access nested property values at any depth in the world. Less than **0.3K** size after compression.

## Feature
- Light and easy
- Access nested property values at any depth
- Execute function, like `lstGet(obj, 'a.f()')`
- You can use default value, when the result is undefined

## Install
```bash
npm install lst-get --save
```

## Usage
```javascript
// the object
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


// before，bad code with long logical expressions
var value = obj.a && obj.a.b && obj.a.b[0] && obj.a.b[0].c


// after, nice code
var lstGet = require('lst-get')

lstGet(obj, 'a.b[0].c') //=> 'foo'
lstGet(obj, 'a.b[0].c.e', 'defaultValue') //=> 'defaultValue'
lstGet(obj, 'a.f()') //=> 'fn-foo'
lstGet(obj, 'a.f2().d') //=> 'fn-bar'
```


## Arguments
### (object, expression, defaultValue)

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| object | `object` | `true` | the input object |
| expression | `string` | `true` | the property accessor expression to get object value |
| defaultValue | `*` | `false`| the default value, if `[object].[expression]` is undefined |

## License

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