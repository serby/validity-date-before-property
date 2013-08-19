var assert = require('assert')
  , startDate = Date.now()
  , fixtures =
    { valid:
      { startDate: 1
      , expiryDate: 2
      }
    , invalid:
      { startDate: 2
      , expiryDate: 1
      }
    , validWithDate:
      { startDate: new Date(startDate)
      , expiryDate: new Date(startDate + 100000)
      }
    , invalidWithDate:
      { startDate: new Date(startDate + 100000)
      , expiryDate: new Date(startDate)
      }
    }

describe('date-before-property', function () {

  it('should return a function', function () {
    var dateBeforeProperty = require('../date-before-property')
      , fn = dateBeforeProperty()

      assert.equal(typeof fn, 'function')
  })

  it('should succeed with valid object', function () {
    var dateBeforeProperty = require('../date-before-property')
      , fn = dateBeforeProperty()

      fn('startDate', 'start date', fixtures.valid, function (error, valid) {
        assert.equal(valid, undefined)
      })
  })

  it('should not error if object is missing property', function () {
    var dateBeforeProperty = require('../date-before-property')
      , fn = dateBeforeProperty()

      fn('foo', 'bar', fixtures.valid, function (error, valid) {
        assert.equal(error, null)
      })
  })

  it('should use "expiryDate" as a default compare target and return error message for an invalid object ', function () {
    var dateBeforeProperty = require('../date-before-property')
      , fn = dateBeforeProperty()

      fn('startDate', 'start date', fixtures.invalid, function (error, valid) {
        assert.equal(valid, 'start date must be before expiry date')
      })
  })

  it('should succeed with valid object when properties are date values', function () {
    var dateBeforeProperty = require('../date-before-property')
      , fn = dateBeforeProperty()

      fn('startDate', 'start date', fixtures.validWithDate, function (error, valid) {
        assert.equal(valid, undefined)
      })
  })

  it('should return an invalid error with invalid dates', function () {
    var dateBeforeProperty = require('../date-before-property')
      , fn = dateBeforeProperty()

      fn('startDate', 'start date', fixtures.invalidWithDate, function (error, valid) {
        assert.equal(valid, 'start date must be before expiry date')
      })
  })
})