module.exports = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the employee',
    },
    {
        message: 'Enter the employee id number of the employee',
        name: 'id'
    },
    {
        message: 'Enter the email address of the employeee',
        name: 'email'
    },
    {
        type: 'list',
        message: 'Enter the role of the employee',
        choices: [
            'Intern',
            'Engineer',
            'Manager'
        ],
        name: "role"
    },

];
