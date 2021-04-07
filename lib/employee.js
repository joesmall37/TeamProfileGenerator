class Employee   {
    constructor(name, emplouyeeId, emailAddress, officeNumber) {
    this.name = name;
    this.employeeId = employeeId;
    this.emailAddress = emailAddress;
    this.officeNumber = officeNumber;
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
getOfficeNumber() {
        return `The employee's office number is ${this.officeNumber}`
}
}

module.exports = Employee;
