person = {
    sno: 1,
    name: "Peter",
    city: "Mumbai"
}

person.skills = ["Java","CSS","JAvascript"]
list = [34,345,345]
list["sno"]=35
list["name"]="Arjun"
console.log(person)
for(let  x in person)
    console.log(x, "=>", person[x])

console.log(Object.keys(person))
console.log(Object.keys(list))



 
