# lightest get

[![NPM][img-npm]][url-npm]

[![Build Status][img-travis]][url-travis]
[![Language][img-javascript]][url-github]
[![License][img-mit]][url-mit]

The lightest package to get object value in the world. Less than **0.26K** size after compression.

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

// before，bad code without `lightest-get`
var value = obj.a && obj.a.b && obj.a.b[0] && obj.a.b[0].c

// after, nice code
var get = require('lightest-get')

get(obj, 'a.b[0].c') //=> 'foo'
get(obj, 'a.b[0].c.e', 'defaultValue') //=> 'defaultValue'
get(obj, 'a.f()') //=> 'fn-foo'
get(obj, 'a.f2().d') //=> 'fn-bar'
```

## Arguments
### (object, expression, defaultValue)

| Param | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| object | `object` |  | `true` | the input object |
| expression | `string` |  | `true` | the property accessor expression to get object value |
| defaultValue | `*` |  | `false`| the default value, if `[object].[expression]` is undefined |

## License

[![license][img-mit]][url-mit]


[url-github]: https://github.com/ChanceYu/lightest-get
[url-npm]: https://www.npmjs.com/package/lightest-get
[url-travis]: https://travis-ci.org/ChanceYu/lightest-get
[url-mit]: https://opensource.org/licenses/mit-license.php

[img-npm]: https://nodei.co/npm/lightest-get.png?compact=true
[img-travis]: https://travis-ci.org/ChanceYu/lightest-get.svg?branch=master
[img-javascript]: https://img.shields.io/badge/language-JavaScript-brightgreen.svg
[img-mit]: https://img.shields.io/badge/license-MIT-blue.svg