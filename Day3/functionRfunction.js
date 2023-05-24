function sample() {
    console.log("sample logic")
    return function(a,b) {
        return a+b;
    }
} //function return function

//console.log(sample())
console.log(sample()(12,35))