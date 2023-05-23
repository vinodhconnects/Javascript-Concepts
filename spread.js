a=[3435,34,34,656,35]

b=[...a] //copies the value of the array, not reference

console.log(a)
console.log(b)
b[8]=9090
console.log(a)
console.log(b)