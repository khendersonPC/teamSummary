const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/generateHTML.js');
var finalHTML;
let done = false;

const employees = [];
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter name: ',
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Enter employee id: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address: ',
    },
]

const createdManager = new Promise((resolve, reject) => {
    
    if (!done) {
        questions.push({
            type: 'input',
            name: 'office',
            message: 'Enter office number: ',
        });
        inquirer.prompt(questions).then((data) => {
            const manager = new Manager(data.name, data.email, data.employeeId, data.office);
            employees.push(manager);
            console.log(employees);
            questions.pop();
            done = true;
            resolve("manager created");
            
        });
    }
    else {
        done = false;
        reject("Manager not created");
    }
});

function createEngineer() {
    questions.push({
        type: 'input',
        name: 'github',
        message: 'Enter github username: ',
    });
    inquirer.prompt(questions).then((data) => {
        const engineer = new Engineer(data.name, data.email, data.employeeId, data.github);
        employees.push(engineer);
        console.log(employees);
        questions.pop();
        menu();
    });
}
function createIntern() {
    questions.push({
        type: 'input',
        name: 'school',
        message: 'Enter current school: ',
    });
    inquirer.prompt(questions).then((data) => {
        const intern = new Intern(data.name, data.email, data.employeeId, data.school);
        employees.push(intern);
        console.log(employees);
        questions.pop();
        menu();
    });
}

const menu =()=> {
    let selected = false;
    done = false;
    const menuq = [
        {
            type: 'list',
            name: 'choice',
            message: 'Build your team: ',
            choices: ["Engineer", "Intern", "I am done"]
        }
    ];
    
        if (!selected) {
            
            inquirer.prompt(menuq).then((data) => {

                if (data.choice === "Engineer") {
                    createEngineer();
                }

                if (data.choice === "Intern") {
                    createIntern();
                }
                if (data.choice === "I am done") {
                    done = true;
                    selected = true;
                    finalHTML = generateHTML.openHTML();
                    employees.forEach(element => {
                        finalHTML += generateHTML.cardHTML(element);
                    });
                    finalHTML += generateHTML.closeHTML();
                    console.log(finalHTML);
                    writeToFile("./dist/index.html", finalHTML);
                    
                }
            });
        }
        else {
            selected = false;
        } 
}

// function to write HTML file
function writeToFile(filename, finalString) {

    fs.writeFile(filename, finalString, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    createdManager.then(menu).catch(()=>{
        console.log("nope");
    });
}
init();

