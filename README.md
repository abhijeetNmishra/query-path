# query-path
helper methods to parse url pathname and querystring

## Install

```
$ npm install --save query-path
```

## Usage

```js
const queryPath = require('query-path');

console.log(queryPath.queryStringByKey('name','http://example.com?name=joe'));
//=> 'joe'

//if window url bar equals 'http://example.com?name=chandler'
console.log(queryPath.queryStringByKey('name'));
//=> 'chandler'

console.log(queryPath.pathByIndex(1,'http://exmaple.com/xyz/abc'));
//=> 'abc'

console.log(queryPath.pathByRegex('first'),'http://example.com/firstsecond/secondfirst/thirdsecond');
//=> ['firstsecond','secondfirst']

console.log(queryPath.getQueryStringObj('first'),'http://example.com/name1/name2?name=joe&last=tribiyani');
//=> { name: 'joe', last: 'tribiyani' }
```

## API

### .queryStringByKey(*string*,*string*)
parse a url queryString and provide output based on key. In case second input parameter 'url' is not provided it will take browser URL location.

### .pathByIndex(*int*,*string*)
parse window.location.pathname for browser url or '/' separated path in provided url and give path value based on zero based index.

### .pathByRegex(*string*,*string*)
parse window.location.path for browser url or '/' separated path in provided url and give matching path values as an array for provided regex.

### .getQueryStringObj(*string*)
parse window.location.path for browser url or queryString in provided url and give object with all values.

## License

MIT © [Abhijeet Mishra](https://github.com/abhijeetNmishra)
