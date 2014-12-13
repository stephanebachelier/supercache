(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return factory();
    });
  }
  else if (typeof exports !== 'undefined') {
    module.exports = factory();
  }
  else {
    root.supercache = factory();
  }

}(this, function () {
  'use strict';

  var cache = Object.create(null);

  var cacheIt = function (res) {
    cache[res.req.url] = {
      content: res.text,
      parse: res.req.parse[res.req.type]
    };
  };

  var readFromCache = function (url) {
    var cachedContent = cache[url];

    if (!cachedContent) {
      return null;
    }

    // return deserialize response
    return cachedContent.content && cachedContent.parse ? cachedContent.parse(cachedContent.text) : null;
  };

  var clearCache = function () {
    cache = null;
  };

  var writeToCache = function (req) {
    if (!req) {
      return;
    }

    // listen to request
    req.on('response', cacheIt);
  };

  return {
    writeToCache: writeToCache,
    readFromCache: readFromCache,
    clearCache: clearCache
  };
}));
