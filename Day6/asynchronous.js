function delayedProcess(input) {
    console.log("function Started and process started")
 return new Promise(function(resolve,reject) {
    setTimeout(function(){
        if(input=="badinput")
          reject("A bad input")
        else
         resolve("Hello")
    }, 3000)  //this part of code is asynchronous
  });
}
result = delayedProcess("badinput")
//console.log(result)
result.then (
    function(data) {console.log(data, " is processed and received")},
    function(error) {console.log(error )}
)
console.log("other lines of code")










//setTimout carries two parameters
// 1. callback function
// 2. number (time represented in milliseconds)
// meaning: the call function will run after the time specied
// milli seconds
/*

setTimeout(function(){
    console.log("PRINTING CONTENT")
},8000)

*/