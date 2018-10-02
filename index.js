/**
 * lightest way to get object value
 * @param {object} obj, the input object
 * @param {string} exp, the property accessor expression to get object value
 * @param {*} def, the default value, if [object].[expression] is undefined
 */
function get(obj, exp, def){
  if (!(obj && exp)) throw new Error('both object and expression args are required')
  try{
    var fn = new Function('o', 'return o.' + exp)
    var val = fn.call(null, obj)
    return typeof val === 'undefined' ? def : val
  }catch(e){
    return def
  }
}

module.exports = get