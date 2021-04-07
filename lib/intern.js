const fs = require('fs');
const Employee = require('./employee')

class Intern extends Employee {
    constructor(school) {
    super('Sammy', 102203, 'sammy@pitt.edu')
    this.school = school;

    }
    getRole() {
        return 'Intern';
    }
}

const newIntern = new Intern('Pitt');

console.log(newIntern.school)
console.log(newIntern.getRole())
