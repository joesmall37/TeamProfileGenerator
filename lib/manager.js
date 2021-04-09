const Employee = require('./employee.js');


class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
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


module.exports = Manager;
