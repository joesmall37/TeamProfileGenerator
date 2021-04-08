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
    <script src="script.js"></script>
</body>
</html>`
}

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
