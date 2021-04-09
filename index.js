const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const employeeQuestions = require('./employeequestions')


const employeeList = [];


const initEmployee = () => {
    inquirer.prompt(employeeQuestions).then(

    ).then(function ({ name, role, id, email }) {
        let questionByRole = "";
        if (role === 'Intern') {
            questionByRole = 'School'
        } else if (role === 'Engineer') {
            questionByRole = 'github username'
        } else {
            questionByRole = 'office number'
        }
        inquirer.prompt([{
            message: `Enter the ${questionByRole} of the employee`,
            name: 'questionByRole'
        },
        {
            type: 'input',
            message: 'Add a new employee to the list?',
            name: "newEmployee"
        }
        ]).then(function ({ questionByRole, newEmployee }) {
            let newEmp;
            if (role) {
                if (role === "Engineer") {
                    newEmp = new Engineer(name, id, email, roleInfo);
                } else if (role === "Intern") {
                    newEmp = new Intern(name, id, email, roleInfo);
                } else {
                    newEmp = new Manager(name, id, email, roleInfo);
                }
                employeeList.push(newEmp);
                renderHTML(newMember)
                    .then(function () {
                        if (moreMembers === "yes") {
                            initEmployee();
                        }
                    })
            })

            const renderHTML = () => {
                `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="script.css">
    <title>Document</title>
</head>
<body>

</body>
</html>`
            }

         const editedHTML = () => {
                ``
            }
