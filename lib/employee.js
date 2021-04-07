class Employee {
    constructor(name, employeeId, emailAddress) {
    this.name = name;
    this.employeeId = employeeId;
    this.emailAddress = emailAddress;

}
getEmployeeName() {
    return `The employee's name is ${this.name}`
}
getEmployeeId() {
    return `The employee's id is ${this.name}`
}
getEmailAddress() {
        return `The employee's email address is ${this.emailAddress}`
}

getRole() {
    return 'Employee'
}
}
// Employee.prototype.getEmailAddress = () => {
//     return `The employee's email address is ${this.emailAddress}`
// } prototypes for the other methods

module.exports = Employee;
