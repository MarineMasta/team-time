const Employee = require("./employee")


class Manager extends Employee {
    constructor(name, id, email, phoneNumber, location, github){
        super (name, id, email, phoneNumber, location, github)
        this.title = "Manager"
    };

    getRole(){
        return this.title;
    }

}

module.exports = Manager