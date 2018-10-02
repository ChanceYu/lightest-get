var expect = require('chai').expect
var get = require('./index')

// the object
var obj = {
  a: {
    b: [{
      c: 'foo'
    }],
    f: function () {
      return 'fn-foo'
    },
    f2: function () {
      return {
        d: 'fn-bar'
      }
    }
  }
}

describe('testing: lightest-get', function () {

  it('get', function () {
    expect(get(obj, 'a.b[0].c')).to.equal('foo')
  })
  it('get with default value', function () {
    expect(get(obj, 'a.b[0].c.e', 'defaultValue')).to.equal('defaultValue')
  })
  it('get with function', function () {
    expect(get(obj, 'a.f()')).to.equal('fn-foo')
  })
  it('get with function\'s return object', function () {
    expect(get(obj, 'a.f2().d')).to.equal('fn-bar')
  })

})