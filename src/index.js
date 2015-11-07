/*jshint node:true */

'use strict';

module.exports = function factory(Decimal) {
  return binaryFactory(Decimal, 'plus');
};

function binaryFactory(Decimal, operation) {
  Decimal.prototype[operation] = function(x) {
    return new Decimal(Decimal.getAdapter()[operation](this.val(), x.val()).toString());
  };

  return Decimal;
}
