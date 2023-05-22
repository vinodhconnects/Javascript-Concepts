//apart from scalar types, javascript supports objects and 
//array type of data

//javascript array
//array is collection of js objects

a=[12,3453,34,34,35]
b=[34,"Ram",true,"Peter", {sno:1, name:"Roger"}, [34,34,9034]]

console.log(a)
console.log(b)
//indexing starts with 0
console.log(b[4])
console.log(b[5][2])
//javascript object
person = { sno:1,name: "Arun", city: "Agra", address:{
    doorno: 81, street: "New Street"
}}
     

console.log(person)
console.log(person.name)
console.log(person['name'])
console.log(person.address.street)
console.log(person['address']['street'])