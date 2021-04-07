const fs = require('fs');
const employee = require('./employee.js')

class Manager extends Employee {

}

const myManager = new Manager('john', 09000, 'john@gmail.com', 239)

console.log(myManager.name)
