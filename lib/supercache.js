(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory();
    });
  } else if (typeof exports !== 'undefined') {
    module.exports = factory();
  } else {
    root.supercache = factory();
  }

}(this, function () {
  'use strict';

  // code goes here
  var supercache = function (options) {

  };

  return supercache;
}));
