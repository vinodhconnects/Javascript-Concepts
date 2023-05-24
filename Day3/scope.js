function Sample(){
    //console.log(this) //this refers to the object
          //with which the current function is called
    console.log(this.Sample.store)        
}

a=30
Sample.store = {sno:1, name : "Ratan"}
Sample() //window.Sample in case of browser
         //global.Sample