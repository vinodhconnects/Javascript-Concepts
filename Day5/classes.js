//es2015 or later

class Student  {
//sno;
//name; //not legal in es2015
    constructor(sno,name){
        this.sno = sno
        this.name = name
    }

    display() {
        console.log ("Sno: ",this.sno, "Name: ",this.name)
    }
}

obj = new Student(12,"Rohan")
obj1 = new Student(13, "Rahul")

obj.display()
obj.display()
// Note no access specifiers supported
// in the latest js version instance members declaration allowed
// outside constructor
// but es2015,16,17  not allowed
