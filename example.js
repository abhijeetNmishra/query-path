var qp = require('./lib/index');
//test pathByRegex
console.info(qp.pathByRegex('name','http://example.com/name1/name2/abc'));
//test getQueryStringObj
console.info(qp.getQueryStringObj('http://example.com/name1/name2?name=abhijeet&last=mishra'));
