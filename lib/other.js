const Employee = require("./employee")

class Other extends Employee {
    constructor(name, id, email, phoneNumber, location, github){
        super (name, id, email, phoneNumber, location, github)
        this.title = role;
        this.schoolType = schoolType;
        this.schoolName = schoolName;
    };

    getRole(){
        return this.title;
    }
}

module.exports = Other;