const user = {
    firstName:"Sunny",
    lastName:"Kumar",
    //add fullName function
    // fullName(){
    //     return `${this.firstName} ${this.LastName}`
    // }
 get fullName(){
    console.log("geting.....");
    
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
       const spited = value.split(" ")
       this.firstName=spited[0]
       this.lastName=spited[1]
        
    }

}

//user.fullName="Akash Kumar" //this line remove fullName Function ans make new key fullName