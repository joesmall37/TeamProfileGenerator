const fs = require('fs');
const Employee = require('./employee.js');

// why is extension only working in lowercase?????
class Manager extends Employee {

    constructor(officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;

    }

    getOfficeNumber() {
        return `The employee's office number is ${this.officeNumber}`
    }
    getRole() {
        return 'Manager'
    }
}


const myManager = new Manager(129)


console.log(myManager.getRole())
console.log(myManager.getOfficeNumber())
console.log(myManager.getEmailAddress())
console.log(myManager.getEmployeeName())
