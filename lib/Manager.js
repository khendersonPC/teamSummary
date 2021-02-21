const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,email, officeNumber){
        super(name, email);
        this.officeNumber=officeNumber;
    }

    getRole(){
        return "Manager";
    }
}
module.exports = Manager;