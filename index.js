const fs = require('fs');
const inquirer = require('inquirer');
const employee= require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const employeeQuestions = require('./employeequestions')


const employeeList = [];


const initEmployee = () => {
inquirer.prompt(employeeQuestions).then(

).then(function({name, role, id, email}) {
    let questionByRole = "";
    if (role === 'Intern') {
        questionByRole = 'School'
    }else if (role === 'Engineer') {
        questionByRole = 'github username'
    }else {
        questionByRole = 'office number'
    }
inquirer.prompt([{
message: `Enter the ${questionByRole} of the employee`,
name: 'questionByRole'
}])



})
}

const renderHTML = () => {

}


