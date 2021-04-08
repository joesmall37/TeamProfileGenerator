const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('questions');


const generateHTML = () => {
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
    <h1> My name is ${answers.username}</h1>
    <h1> My location is ${answers.location}</h1>
    <h1> My bio is ${answers.bio}</h1>
    <h1> My linkedin is ${answers.linkedin}</h1>

    <script src="script.js"></script>
</body>
</html>`
}

inquirer
    .prompt(questions)
    .then((data) => {
        switch (data.license) {
            case 'MIT':
                data.license = licenseText.mit;
                break;
            case 'Unlicense':
                data.license = licenseText.unlicense;
                break;
            case 'Boost':
                data.license = licenseText.boost;
            case 'Mozilla':
                data.license = licenseText.mozilla;
                break;
            case 'Apache':
                data.license = licenseText.apache;
                break;
            case 'GNU':
                data.license = licenseText.gnu;
                break;
            case 'Eclipse':
                data.license = licenseText.eclipse;
                break;
        }
        const filename = `index.html`;
        fs.writeFile(filename, generateHTML(data), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
