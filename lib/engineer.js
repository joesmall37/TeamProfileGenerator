const fs = require('fs');
const Employee = require('./employee')


class Engineer extends Employee {
    constructor(github) {
        super('Joe', 430009, 'joe@gmail.com')
        this.github = github;
}

getRole() {
    return 'Engineer'
}
getGithub() {
    return `The engineer's github username is ${this.github}`
}
}

const newEngineer = new Engineer('joesmall37@github');

console.log(newEngineer.getEmployeeName())
console.log(newEngineer.getRole())
console.log(newEngineer.getGithub())
