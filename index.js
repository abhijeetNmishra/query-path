'use strict';
exports.qsval = function(name, url) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  if (url) {
    var results = regex.exec(url);
  } else {
    var results = regex.exec(location.search);
  }
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
