let user ={
    name:"Sunny",
    age:23,
    getAgeYear:function(){
        return new Date().getFullYear()-user.age
    }
}


//Factory Function

function createUser(firstName,lastName,age){
    const user={
        firstName,
        lastName,
        age,
        getAgeYear(){
            return new Date().getFullYear()-user.age
        }
    }
    return user
}
const user1 = createUser("Sunny","Kumar",23)

//prevent memory but avoid encapsulation and abstraction but achieve polymorphytion
function getAgeYear(){
    console.log(this);
    
    return new Date().getFullYear()-this.age
}

function createUser2(firstName,lastName,age){
    const user={
        firstName,
        lastName,
        age,
        getAgeYear
      
    }
    return user
}
const user2 = createUser2("Sunny","Kumar",23)
const user3 = createUser2("Sunni","Kumar",25)

//prevent memory without prototype function make function in main function object


function createUser3(firstName,lastName,age){
    const user={
        firstName,
        lastName,
        age,
        getBirthYear : createUser3.commonMethods.getBirthYear,
      
    }
    return user
}
createUser3.commonMethods = {
    getBirthYear(){
        return new Date().getFullYear()-this.age
    }
}
const user4 = createUser3("Sunny","Kumar",23)
const user5 = createUser3("Sunni","Kumar",25)

/** its time its is a contractor function its fully optimize */

function CreateUser4(firstName,lastName,age){
this.firstName=firstName;
this.lastName=lastName;
this.age=age
}
CreateUser4.prototype.getBirthYear=function(){
    return new Date().getFullYear()-this.age
}

const user6 =new CreateUser4("Sunny","Kumar",23)
const user7 =new CreateUser4("Sunni","Kumar",25)

function sayHi(){
    console.log(this);
    
}