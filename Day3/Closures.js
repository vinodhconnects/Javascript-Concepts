// Javascript allows creating function within function
// The function which is defined with in a function
// is generally meant to be accessed only within the outer function
// not globally
// if fun a needs function b and it does not want anything outside 
// the function to use it we can declare b as in inner function

function outer(b) {
    state = 1
    function inner() {
        console.log(state," is outer state")
        console.log(b, "in inner function")
        innerstate=1
        console.log(innerstate , " is inner state")
        state++;
        innerstate++;
    }
    console.log(state ,"accessed within outer")
    //inner()  --- Working version
    //console.log(innerstate, "accessed within outer") //not possible
    return inner
}

result=outer("King")
//result2=outer("king")
console.log(result)
result()
result()
result()
//outer.inner()