class CreateUser{
    constructor(a,b,c) {
        this.firstName=a;
        this.lastName=b;
        this.age=c
    }
    getBirthYear(){
        return new Date().getFullYear()-this.age
    }
}


const user1 =new CreateUser("Sunny","Kumar",23)
const user2 =new CreateUser("Sunni","Kumar",25)