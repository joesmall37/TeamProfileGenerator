// const fs = require('fs');
const Employee = require('./employee')


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
}

getRole() {
    return 'Engineer'
}
getGithub() {
    return `${this.github}`
}
}


// const newEngineer = new Engineer('Joe', 9090, 'test@gmail.com', 'joesmall37@github');

// console.log(newEngineer.getEmployeeName())
// console.log(newEngineer.getRole())
// console.log(newEngineer.getGithub())

module.exports = Engineer;
