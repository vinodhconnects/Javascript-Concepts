function a(){}

function b() { return "Hello" }

c = function() { return "Hi"}
console.log(a())
console.log(b())
console.log(c())

console.log(typeof(a))
// note : functions return undefined if it doesnot encounter
// return statement