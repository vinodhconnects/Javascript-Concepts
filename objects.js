person = {
    sno: 1,
    name: "Peter",
    city: "Mumbai"
}

list = [34,345,345]
list["sno"]=35
list["name"]="Arjun"
for(let  x in person)
    console.log(x, "=>", person[x])

console.log(Object.keys(person))
console.log(Object.keys(list))

 
