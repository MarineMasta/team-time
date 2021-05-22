const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, phoneNumber, location, github){
        super (name, id, email, phoneNumber, location, github)
        this.title = "Engineer"
    };

    getRole(){
        return this.title;
    }
}

module.exports = Engineer
