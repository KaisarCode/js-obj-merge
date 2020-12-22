# OBJMerge
[js] Object merger.

### Install
```
npm install kc-obj-merge
```

### Use
```js
var objMerge = require('kc-obj-merge');
var a = {a:1,b:2,c:3};
var b = {a:1,c:3};
var c = {a:1,b:4};
var d = objMerge(a,b,c);
console.log(d);
```
