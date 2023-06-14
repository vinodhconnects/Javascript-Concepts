words = ['raj','ram','Arun','Jacob',
 'Nation','Lotion','Station','Activity',
'12343','343','pig','gig','gag','tea','naresh@gmail',
'arun@gmail.com','james_123@yahoo.com','sarah@gmail.com',
'nakul35','John',"Jhon",'kane@gmail','235Rogue','Green','stream',
'Port','is','so','hi','99','19','9','909','7$4','2.1','123@gmail.net',
'roger.213@gmail.net','harry.35@hotmail.org','net@net34.com']
regex=/^[a-z][a-z0-9_\.]{3,}@[a-z]{3,15}[\.](com|in|net|org)$/
//regex=/J(ho|oh)n/
//regex=/^...$/
//regex=/^[A-Za-z][A-Za-z]{2,4}[A-Za-z]$/
//regex=/^[0-9]*$/
//regex=/^[0-9][0-9]*[0-9]$/
//regex = /^[A-Za-z][A-Za-z]*[A-Za-z]$/
//regex = /^[A-Za-z][A-Za-z]+[A-Za-z]$/
//regex = /^[A-Za-z][A-Za-z][A-Za-z]$/
//regex =  /^[A-JS-Z]/ //new Regex("^S")
//regex =  /^[0-9]/ //new Regex("^S")
//regex =  /^[rgt]/ //new Regex("^S")

for(let x of words){

   if(regex.test(x)) {
     console.log(x)
   }

}


// Regex- set of characters that represent a string pattern
// regex follow universal syntax, we use some predefined wild card characters

// ^ - beggining with
// $ - ending With
//[abc] - one occurance of either a or b or c
//+ - one or more 
//* - zero or more
//{n} - exactly n occurances
// {m,n} - minumum m occurances and maximum n occurances
//regex =  /^r/ //new Regex("^S")
// . - any character
