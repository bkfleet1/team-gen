// application dependencies
const inquirer = require(`inquirer`); // questions resource (npm i inquirer)
const jest = require(`jest`); // testing resource (npm i jest)
const fs = require(`fs`); // write file resource (node resource)

// Class objects defined in the /lib directory
const Employee = require(`.lib/Employee`);
const Manager = require(`.lib/Manager`);
const Engineer = require(`.lib/Engineer`);
const Intern = require(`.lib/Intern`);


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
        message: `Please enter ${data.name}'s employee id. (Required)`,
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
        message: `Please enter ${data.name}'s email address. (Required)`,
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
        message: `Please enter ${data.name}'s GitHub username. (Required)`,
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
        message: `Please enter ${data.name}'s employee id. (Required)`,
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
        message: `Please enter ${data.name}'s email address. (Required)`,
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
        message: `Please enter the school name ${data.name} is attending. (Required)`,
        validate: github => {
            if (github) {
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
    inquirer.prompt(questionsManager)
        .then((data) => {
            const Manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            console.log(`Manager:`, Manager);
            employeeArr.push(Manager);
            crtEmp();
        })
        .catch((err) => {
            console.log(`The following error occurred while creating ${data.name}'s profile. Here's the error:`, err);
        })
};

const crtEmp = () => {
    inquirer.prompt(questionsAddEmp)
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
Let's start creating a new Engineer Profile!
____________________________________________
`);
    inquirer.prompt(questionsEngineer)
        .then((data) => {
            const Engineer = new Engineer(data.name, data.id, data.email, data.github);
            console.log(`Engineer:`, Engineer);
            employeeArr.push(Engineer);
            crtEmp();
        })
        .catch((err) => {
            console.log(`The following error occurred while creating ${data.name}'s profile. Here's the error:`, err);
        })
};

const crtEngineer = () => {
    console.log(`
Let's start creating a new Intern Profile!
____________________________________________
`);
    inquirer.prompt(questionsIntern)
        .then((data) => {
            const Engineer = new Engineer(data.name, data.id, data.email, data.school);
            console.log(`Engineer:`, Engineer);
            employeeArr.push(Engineer);
            crtEmp();
        })
        .catch((err) => {
            console.log(`The following error occurred while creating ${data.name}'s profile. Here's the error:`, err);
        })
};

init();