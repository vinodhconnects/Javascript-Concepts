// Javascript allows creating function within function
// The function which is defined with in a function
// is generally meant to be accessed only within the outer function
// not globally
// if fun a needs function b and it does not want anything outside 
// the function to use it we can declare b as in inner function

function outer() {
    state = 1
    function inner() {
        console.log(state," is accessible within inner")
        innerstate=1
        console.log(innerstate , " within innerfuction")
        state++;
        innerstate++;
    }
    console.log(state ,"accessed within outer")
    console.log(innerstate, "accessed within outer") //not possible
}

outer()