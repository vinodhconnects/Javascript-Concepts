function giveMeWhatIask(input){
    var fruits = ["Apple","Banana","Papaya","Gauva","Orange"]
    var vegetables= ["Carrot","Potato","Onion","Chilli","Beans"]

    setTimeout(function(){
     if(input=="fruits")
         resolve(fruits[Math.round(Math.random()*5)])
     else if(input=="vegetables")
        resolve(vegetables[Math.round(Math.random()*5)])
     else
        reject ("only fruits or vegetables as input please")
    },2000)
}