class User{
    #age
    constructor(a,b,c) {
        this.firstName=a;
        this.lastName=b;
        this.#age=c
    }
    #hi = "hello"
    static hlo="hlo"

    static{
       
        this.sunny="name"
        this.getFullName=function(){
            return this.firstName +" "+this.lastName
        }
   
        
        
    }
    get fullName(){
        return this.firstName +" "+this.lastName
    }
    set fullName(value){
        const spited = value.split(" ")
        this.firstName=spited[0]
        this.lastName=spited[1]
         
     }

    getBirthYear(){
        console.log(this.#hi);
        
        return new Date().getFullYear()-this.#age
    }
}


const user1 =new User("Sunny","Kumar",23)
const user2 =new User("Sunni","Kumar",25)

class Student extends User{
 constructor(firstName,lastName,age,standard){
    super(firstName,lastName,age)
    this.standard=standard
 }
 study(){
    console.log("Studing");
    
 }
}
class Employee extends User{
    constructor(firstName,lastName,age,company){
        super(firstName,lastName,age)
        this.company=company

    }
}
const student1 =new Student("Sunny","Kumar",23,"10th")
const employee1 =new Employee("Sunny","Kumar",23,"Google")