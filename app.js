const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./css")

const Employee = require("./lib/employee")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Other = require("./lib/other")

let finalTeamArray = [];


function startingPrompt() {
    inquirer.prompt([
        {
            name: "team",
            message: "Write your team name:",
        }
    ])
        .then(function(data){
            const teamName = data.team
            finalTeamArray.push(teamName)
            addManager();
        })

    
}

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Write your team manager's name:",
        },
        {
            type: "input",
            name: "email",
            message: "Write your team manager's email address:",
        },

        {
            type: "number",
            name: "phoneNumber",
            message: "Write your team manager's phone number:",
        },
        {
            type: "input",
            name: "location",
            message: "Write your team manager's location:"
        },
        {
            type: "input",
            name: "github",
            message: "Write your team manager's github link:"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const phoneNumber = data.phoneNumber
            const location = data.location
            const github = data.github
            const teamMember = new Manager(name, id, email, phoneNumber, location, github)
            finalTeamArray.push(teamMember)
            addMembers();
        });

}

function addMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes, an engineer", "Yes, an intern", "Yes, another member","No"],
            name: "addMember"
        }
    ])

        .then(function (data) {

            switch (data.addMemberData) {
                case "Yes, an engineer":
                    addEngineer();
                    break;

                case "Yes, an intern":
                    addIntern();
                    break;
                case "Yes, another member":
                    addOther();
                    break;
                case "No":
                    compileTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Write your engineer's name:",
        },
        {
            type: "input",
            name: "email",
            message: "Write your engineer's email address:",
        },
        {
            type: "number",
            name: "phoneNumber",
            message: "Write your engineer's phone number:"
        },
        {
            type: "input",
            name: "location",
            message: "Write your engineer's location:"
        },
        {
            type: "input",
            name: "github",
            message: "Write your engineer's github link:",
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = finalTeamArray.length + 1
            const email = data.email
            const phoneNumber = data.phoneNumber
            const location = data.location
            const github = data.github
            const teamMember = new Engineer(name, id, email, phoneNumber, location, github)
            finalTeamArray.push(teamMember)
            addMembers()
        });

};

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Write your intern's name:",
        },
        {
            type: "input",
            name: "email",
            message: "Write your intern's email address:",
        },
        {
            type: "number",
            name: "phoneNumber",
            message: "Write your intern's phone number:"
        },
        {
            type: "input",
            name: "location",
            message: "Write your intern's location:"
        },
        {
            type: "input",
            name: "github",
            message: "Write your intern's github link:",
        },
        {
            type: "list",
            name: "schoolType",
            choices: ["high school", "college", "grad school", "not in school"]
        },
        {
            type: "input",
            name: "schoolName",
            message: "Write your intern's school name:"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = finalTeamArray.length + 1
            const email = data.email
            const phoneNumber = data.phoneNumber
            const location = data.location
            const github = data.github
            const schoolType = data.schoolType
            const schoolName = data.schoolName
            const teamMember = new Intern(name, id, email, phoneNumber, location, github, schoolType, schoolName)
            finalTeamArray.push(teamMember)
            addMembers()
        });

};

function addOther() {
    inquirer.prompt([
        {
            type: "input",
            name: "role",
            message: "Write your member's role:",
        },
        {
            type: "input",
            name: "name",
            message: "write your member's name:"
        },
        {
            type: "input",
            name: "email",
            message: "Write your member's email address:",
        },
        {
            type: "number",
            name: "phoneNumber",
            message: "Write your member's phone number:"
        },
        {
            type: "input",
            name: "location",
            message: "Write your member's location:"
        },
        {
            type: "input",
            name: "github",
            message: "Write your member's github link:",
        }
    ])

        .then(function (data) {
            const role = data.role
            const name = data.name
            const id = finalTeamArray.length + 1
            const email = data.email
            const phoneNumber = data.phoneNumber
            const location = data.location
            const github = data.github
            const teamMember = new Other(role, name, id, email, phoneNumber, location, github)
            finalTeamArray.push(teamMember)
            addMembers()
        });

};

function compileTeam() {
    console.log("All done!")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${finalTeamArray[0]}</title>
    <style>
     ${style}
    </style>
</head>

<body>
    <div class="banner-bar">
        <h1>${finalTeamArray[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < finalTeamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${finalTeamArray[i].name}</h2>
                <h2>${finalTeamArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${finalTeamArray[i].id}</p>
        `

        if (finalTeamArray[i].email) {
            object += `
            <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a>></p>
            `
        }

        if (finalTeamArray[i].phoneNumber) {
            object += `
            <p>Phone Number: <a href="tel:${finalTeamArray[i].phoneNumber}">${finalTeamArray[i].phoneNumber}</a></p>
            `
        }

        if (finalTeamArray[i].location) {
            object += `
            <p>Location: ${finalTeamArray.location}</p>
            `
        }

        if (finalTeamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
            `
        }

        if (finalTeamArray[i].schoolType) {
            object += `
            <p>School Type: ${finalTeamArray[i].schoolType}</p>
            `
        }

        if (finalTeamArray[i].schoolName) {
            object += `
            <p> School Name: ${finalTeamArray[i].schoolName}</p>
            `
        }

        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./${finalTeamArray[0]}.html`, htmlArray.join(""), function (err) {
        
    })
}

startingPrompt()

