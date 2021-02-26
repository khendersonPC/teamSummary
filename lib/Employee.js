class Employee{
    //static count=0;
    //id;

    constructor(name, email, id){
        //this.count++;
        this.name=name;
        this.email=email;
        this.id = id;
        //Employee.count++;
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}
module.exports = Employee;
