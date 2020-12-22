// Object merger
function objMerge() {
    var out = {};
    var arg = arguments;
    function merger(obj) {
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
            if (Object.prototype.toString
            .call(obj[k]) === '[object Object]') {
                out[k] = objMerge(out[k], obj[k]);
            } else {out[k] = obj[k]}}
        }
    }
    for (var i = 0; i < arg.length; i++) {
    merger(arguments[i])} return out;
}
