

function demoVariable (){
   const a=30
    console.log("Within the outer range a is",a)
    {
        let a=90 //error local scope is already declared
        console.log("within the block range a is",a)
        
       
    }
    console.log("Again within the outer range a is",a)
}

demoVariable()