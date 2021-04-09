const fs = require('fs');
const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school;

    }
    getSchool() {
        return `The intern's school is ${this.school}`
    }
    getRole() {
        return 'Intern';
    }
    // get school method
}


module.exports = Intern;
