'use strict';

var compact = function(array) {
  var index = -1,
    length = array ? array.length : 0,
    resIndex = -1,
    result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[++resIndex] = value;
    }
  }
  return result;
}

exports.queryStringByKey = function(key, url) {
  key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
  if (url) {
    var results = regex.exec(url);
  } else {
    var results = regex.exec(location.search);
  }
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

exports.pathByIndex = function(index, url) {
  var pathname = '';
  var retVal = '';
  if (url) {
    pathname = url;
  } else {
    pathname = (typeof window !== "undefined") ? window.location.pathname : '';
  }
  pathname = compact(pathname.split('/'));
  if (index < pathname.length) {
    retVal = pathname[index];
  }
  return retVal;
}

exports.pathByRegex = function(matchingString, url) {
  var pathname = '';
  var retVal = [];
  if (url) {
    pathname = url.split('?')[0];;
  } else {
    pathname = (typeof window !== "undefined") ? window.location.pathname : '';
  }
  pathname = compact(pathname.split('/'));
  console.info('pathname', pathname);
  if (matchingString && pathname.length > 0) {
    pathname.map(function(val, i) {
      if (val.indexOf(matchingString) >= 0) {
        retVal.push(val);
      }
    })
  }

  return retVal;
}
