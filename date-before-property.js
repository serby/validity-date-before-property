// Returns a validity style validator that checks the key date against the otherDatePropertyName
// or expiry date
module.exports = function (otherDatePropertyName, niceName) {
  otherDatePropertyName = otherDatePropertyName || 'expiryDate'
  niceName = niceName || 'expiry date'
  return function (key, msg, object, callback) {
    var valid = !(object[otherDatePropertyName] && object[key]) || (object[key] < object[otherDatePropertyName])
    return callback(null, valid ? undefined : msg + ' must be before ' + niceName)
  }
}