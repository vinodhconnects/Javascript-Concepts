function outer(){
    a=30

    function inner(){
        console.log("outer a value in inner",a)
        a++
    }
    return inner
}

 fun = outer();
 fun();  //30
 fun();  //31
 fun(); //32