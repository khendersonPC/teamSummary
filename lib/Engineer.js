const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name,email, github){
        super(name, email);
        this.github=github;
    }

    getgithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }

}

module.exports = Engineer;