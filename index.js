const fs = require('fs');
const inquirer = require('inquirer');
const internquestions = require('./internquestions');
const employeequestions = require('./employeequestions');
const engineerquestions = require('./engineerquestions');
const managerquestions = require('./managerquestions');


const generateHTML = (answers) => {
    ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Document</title>
</head>
<body>
    <h1> The employee's name is ${employee.name}</h1>
    <h1> The employee's id ${employee.id}</h1>
    <h1> The employee's email is ${employee.email}</h1>


    <h1> The managers's name is ${manager.name}</h1>
    <h1> The manager's id ${manager.id}</h1>
    <h1> The manager's email is ${manager.email}</h1>

    <h1> The engineer's name is ${engineer.name}</h1>
    <h1> The engineer's id ${engineer.id}</h1>
    <h1> The engineer's email is ${engineer.email}</h1>

     <h1> The intern's name is ${intern.name}</h1>
    <h1> The intern's id ${intern.id}</h1>
    <h1> The intern's email is ${intern.email}</h1>

    <script src="index.js"></script>
</body>
</html>`
}

// promopt a list of what employee to be
// .then ({type})
// if engineer createEngineer()

// function createTeam (){
// inquirer.prompt
// [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'Please enter the name of the employee',
//     },
//     {
//         type: 'input',
//         name: 'title',
//         message: 'Please enter the id of the employee',
//     },
//     {
//         type: 'input',
//         name: 'description',
//         message: 'Please enter the email address of the employee',
//     }
// ]
// ).then ([]) => {
//     if (role = engineer) {

//     }

// if else statement




inquirer
    .prompt(internquestions)
    .prompt(engineerquestions)
    .prompt(managerquestions)
    .prompt(employeequestions)
    .then((data) => {
        const filename = `index.html`;
        fs.writeFile(filename, generateHTML(data), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
