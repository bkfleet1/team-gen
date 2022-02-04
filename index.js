// application dependencies
const fs = require(`fs`); // write file resource (node resource)
const inquirer = require(`inquirer`); // questions resource (npm i inquirer)
const jest = require(`jest`); // testing resource (npm i jest)
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



const employeeArr = [];

const questionsManager = [
    {
        type: 'input',
        name: 'name',
        message: `Please enter your name. (Required)`,
        validate: name => {
            if (name) {
                return true
            } else {
                console.log(`Oops! You did not enter a name. Please enter a name.`);
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: `Please enter your employee id. (Required)`,
        validate: id => {
            if (id) {
                return true
            } else {
                console.log(`Oops! You did not enter an employee id. Please enter an employee id.`);
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter your email address. (Required)`,
        validate: email => {
            if (email) {
                return true
            } else {
                console.log(`Oops! You did not enter an email address. Please enter an email address.`);
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: `Please enter your office number. (Required)`,
        validate: email => {
            if (email) {
                return true
            } else {
                console.log(`Oops! You did not enter office number. Please enter your office number.`);
                return false
            }
        }
    }
];

const questionsEngineer = [
    {
        type: 'input',
        name: 'name',
        message: `Please enter the name of the team member. (Required)`,
        validate: name => {
            if (name) {
                return true
            } else {
                console.log(`Oops! You did not enter a name. Please enter a name.`);
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: `Please enter the engineer's employee id. (Required)`,
        validate: id => {
            if (id) {
                return true
            } else {
                console.log(`Oops! You did not enter an employee id. Please enter an employee id.`);
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter engineer's email address. (Required)`,
        validate: email => {
            if (email) {
                return true
            } else {
                console.log(`Oops! You did not enter an email address. Please enter an email address.`);
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: `Please enter the engineer's GitHub username. (Required)`,
        validate: github => {
            if (github) {
                return true
            } else {
                console.log(`Oops! You did not enter a GitHub username. Please enter a GitHub username.`);
                return false
            }
        }
    }
];

const questionsIntern = [
    {
        type: 'input',
        name: 'name',
        message: `Please enter the name of the team member. (Required)`,
        validate: name => {
            if (name) {
                return true
            } else {
                console.log(`Oops! You did not enter a name. Please enter a name.`);
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: `Please enter intern's employee id. (Required)`,
        validate: id => {
            if (id) {
                return true
            } else {
                console.log(`Oops! You did not enter an employee id. Please enter an employee id.`);
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter intern's email address. (Required)`,
        validate: email => {
            if (email) {
                return true
            } else {
                console.log(`Oops! You did not enter an email address. Please enter an email address.`);
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: `Please enter the name of the school the intern is attending. (Required)`,
        validate: school => {
            if (school) {
                return true
            } else {
                console.log(`Oops! You did not enter a school name. Please enter a school name.`);
                return false
            }
        }
    }
];

const questionsAddEmp = [
    {
        type: 'list',
        name: 'emps',
        message: `Please select the role of the team memmber you'd like add next. Choose "None" if are finished and want to appication to generate your team's web page. `,
        choices: [`None`, `Engineer`, 'Intern'],
    }
];


const init = () => {
    console.log(`
-------------------------------------
Welcome to the Team Profile Generator
-------------------------------------
Team Profile Generator is a simple solution that uses Javascript, Node JS, and Inquirer to dynamically assemble an HTML5 page that displays the team you define.

Let's get started by building your profile. Then we can create profiles for each of your team members.

`);
   return inquirer.prompt(questionsManager)
        .then((data) => {
            const Managers = new Manager(data.name, data.id, data.email, data.officeNumber);
            console.log(`Manager:`, Managers);
            employeeArr.push(Managers);
            crtEmp();
        })
        .catch((err) => {
            console.log(`The following error occurred while creating manager's profile. Here's the error:`, err);
        })
};

const crtEmp = () => {
    return inquirer.prompt(questionsAddEmp)
        .then((data) => {
            if (data.emps === 'Engineer') {
                crtEngineer()
            } else if
                (data.emps === 'Intern') {
                crtIntern()
            } else {
                console.log(`Almost finished... Your team's profile is being generated. Look for it in the ./dist directory.`);
                console.log(employeeArr);
            }
        })
        .catch((err) => {
            console.log(`The following error occurred while starting a new team member profile.`, err);
        })
};

const crtEngineer = () => {
    console.log(`
============================================    
Let's start creating a new Engineer Profile!
============================================
`);
    return inquirer.prompt(questionsEngineer)
        .then((data) => {
            const Engineers = new Engineer(data.name, data.id, data.email, data.github);
            console.log(`Engineer:`, Engineers);
            employeeArr.push(Engineers);
            crtEmp();
        })
        .catch((err) => {
            console.log(`The following error occurred while creating engineer's profile. Here's the error:`, err);
        })
};

const crtIntern = () => {
    console.log(`
==========================================
Let's start creating a new Intern Profile!
==========================================
`);
    return inquirer.prompt(questionsIntern)
        .then((data) => {
            const Interns = new Intern(data.name, data.id, data.email, data.school);
            console.log(`Intern:`, Interns);
            employeeArr.push(Interns);
            crtEmp();
        })
        .catch((err) => {
            console.log(`The following error occurred while creating the intern profile. Here's the error:`, err);
        })
};

init()