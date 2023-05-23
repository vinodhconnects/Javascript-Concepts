c=[956,12,2455]
a=[3435,34,34,656,35,[...c]]
console.log(a)
b=[...a[5]] // b=[956,12,2455]
a[1]= 777 // only a will be impacted , no impact on b
c[3]=9090
//c=[...a]
b[5][2]=9098
console.log(a)
console.log(b)
/*
b=[...a] //copies the value of the array, not reference
b[5]=[...a[5]]
//es2015 and later
c[3]=890
console.log(a)
console.log(b)
b[8]=9090
console.log(a)
console.log(b)***/