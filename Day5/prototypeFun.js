function Student(sno,name) {
    this.sno = sno
    this.name = name
    console.log(this)
}

Student.prototype.display = function() {
    console.log("Sno: ",this.sno," Name:",this.name)
}
//Student(1,"Rahul") //window scope or global scope

obj1 =new Student(1, "Rahul") //separate scope for Student is created
obj2 = new Student(2, "Harry")
//Student will behave like a class and Student() will behave
//like constructor
obj1.display()
obj2.display()