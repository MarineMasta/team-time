const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, phoneNumber, location, github, schoolType, schoolName){
        super (name, id, email, phoneNumber, location, github)
        this.title = "Intern";
        this.schoolType = schoolType;
        this.schoolName = schoolName;
    }

    getSchoolType(){
        return this.schoolType;
    };

    getSchoolName(){
        return this.schoolName;
    };

    getRole(){
        return this.title;
    }
}

module.exports = Intern