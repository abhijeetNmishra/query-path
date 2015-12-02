'use strict';

const compact = function(array) {
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

exports.queryStringByKey = (key, url) => {
  key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
  if (url) {
    var results = regex.exec(url);
  } else {
    var results = regex.exec(location.search);
  }
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

exports.pathByIndex = (index, url) => {
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

exports.pathByRegex = (matchingString, url) => {
  var pathname = '';
  var retVal = [];
  if (url) {
    pathname = url.split('?')[0];;
  } else {
    pathname = (typeof window !== "undefined") ? window.location.pathname : '';
  }
  pathname = compact(pathname.split('/'));
  if (matchingString && pathname.length > 0) {
    pathname.map(function(val, i) {
      if (val.indexOf(matchingString) >= 0) {
        retVal.push(val);
      }
    })
  }

  return retVal;
}

exports.getQueryStringObj = (url) => {
  const regex = /[?&]([^=#]+)=([^&#]*)/g;
  url = (url) ? url : ((typeof window !== "undefined") ? window.location.href : '');
  let params = {};
  let match;
  while (match = regex.exec(url)) {
    params[match[1]] = match[2];
  }
  return params;
}
