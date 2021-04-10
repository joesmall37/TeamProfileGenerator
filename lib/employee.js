class Employee {
    constructor(name, employeeId, emailAddress) {
    this.name = name;
    this.employeeId = employeeId;
    this.emailAddress = emailAddress;

}
getEmployeeName() {
    return `${this.name}`
}
getId() {
    return `${this.name}`
}
getEmail() {
        return `${this.emailAddress}`
}

getRole() {
    return 'Employee'
}
}
// Employee.prototype.getEmailAddress = () => {
//     return `The employee's email address is ${this.emailAddress}`
// } prototypes for the other methods

module.exports = Employee;
