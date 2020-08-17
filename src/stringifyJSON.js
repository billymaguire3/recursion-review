// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj + '';
  }
  if (obj === null) {
    return 'null';

  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var result = [];
    if (obj.length === 0) {
      return '[]';
    } else {
      obj.forEach(function(value) {
        result.push(stringifyJSON(value));
      });
      return '[' + result.join(',') + ']';
    }
  }

  if (typeof obj === 'object') {
    var result = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        continue;
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + result.join(',') + '}';
  }
};