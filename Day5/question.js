function libfun(fun){
    var dataitems = [ " Python Program", " Java Program", 
    "C# program"]
    fun(dataitems[Math.round(Math.random()*2)])
}

function changeData() {
    var data = "sample"
    console.log("Before changing",data)
    libfun(function( x){
      data =  x
    })
    console.log("data now", data)
}

changeData()
