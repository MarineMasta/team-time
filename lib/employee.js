

class Employee {
    constructor(name, id, email, phoneNumber, location, github){
        this.name = name;
        this.id = id;
        this.title = "Employee";
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.location = location;
        this.github = github
    };
    getName(){
        return this.name;
    };

    getId() {
        return this.id;
    };

    getRole(){
        return this.title;
    };

    getEmail(){
        return this.email;
    };

    getNumber(){
        return this.phoneNumber;
    };

    getLocation(){
        return this.location;
    };

    getGithub(){
        return this.github;
    }
}


module.exports = Employee;
