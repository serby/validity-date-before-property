# validity-date-before-property

[![build status](https://secure.travis-ci.org/serby/validity-date-before-property.png)](http://travis-ci.org/serby/validity-date-before-property) [![Greenkeeper badge](https://badges.greenkeeper.io/serby/validity-date-before-property.svg)](https://greenkeeper.io/)

Validity style validator to ensure a property has a date before another date property.

## Installation

      npm install validity-date-before-property

## Usage

Below is a simple example for usage with schemata:

```js

var validity = require('validity')
  , schemata = require('schemata')
  , dateBeforeProperty = require('validity-date-before-property')

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

```

## Credits
[Paul Serby](https://github.com/serby/) follow me on twitter [@serby](http://twitter.com/serby)

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)