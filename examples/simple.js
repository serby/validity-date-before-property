var validity = require('validity')
  , schemata = require('schemata')
  , dateBeforeProperty = require('../')

var schema = schemata(
    { startDate:
      { type: Date
      , validators:
        { all: [dateBeforeProperty()]
        }
      }
      , expiryDate:
      { type: Date
      }
    })

schema.validate({ startDate: 2, expiryDate: 1 }, function (error, valid) {
  // Show the error
  console.log(valid)
})