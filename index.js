'use strict';
var _ = require('lodash');
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
    pathname = window.location.pathname;
  }
  pathname = _.compact(pathname.split('/'));
  if (index < pathname.length) {
    retVal = pathname[index];
  }
  return retVal;
}

exports.pathByMatchingString = function(matchingString, url) {
    var pathname = '';
    var retVal = [];
    if (url) {
      pathname = url;
    } else {
      pathname = window.location.pathname;
    }
    pathname = _.compact(pathname.split('/'));
    if (matchingString && !_.isEmpty(pathname) {
        _.each(pathname, function(val, i) {
          if (val.indexOf(matchingString) >= 0) {
            retVal.push[val];
          }
        });
      }

      return retVal;
    }
