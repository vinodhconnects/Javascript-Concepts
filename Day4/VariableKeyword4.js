

function demoVariable (){
    a=30
    console.log("Within the outer range a is",a)
    {
        let a=90
        console.log("within the block range a is",a)
        {
            a=900
        }
    }
    console.log("Again within the outer range a is",a)
}

demoVariable()
console.log(a)