function a(){}

function b() { 
    return "Hello" 
}

c = function() { return "Hi"}

console.log(a())
console.log(b())
console.log(c())

b.store = {x:234,y:353,z:900}

console.log(typeof(a))

console.log(b.store)
console.log(b)
console.log(a)
// note : functions return undefined if it doesnot encounter
// return statement