function isThisCool(vals, fn, rx) {
    vals = vals || Array.prototype;
    fn = fn || Function.prototype;
    rx = rx || RegExp.prototype;
    
    return rx.test(
    vals.map(fn).join("")
    );
}

isThisCool();

isThisCool(
["a","b","c"],
function(v) {return v.toUpperCase(); }, 
/D/
);