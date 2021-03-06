const fs = require("fs");
const Employee = require('../lib/employee.js');


// general test
describe('Employee', () => {

    describe('Initialization', () => {
        test('returns an object Employee when the the new Employee is called', () => {
            const employee = new Employee;
            expect(employee instanceof Employee).toBe(true);
        })
//----Q --- I tried to write describe for EACH test -- Q
        test('sets the name of employee when set', () => {
            const name = "Emily";
            const employee = new Employee(name);
            expect(employee.name).toBe(name)
        });
        test('sets the id of employee when set', () => {
            const employeeId = '1';
            const employee = new Employee("", employeeId);
            expect(employee.employeeId).toBe(employeeId)
        })
        test('sets the email address of employee when set', () => {
            const emailAddress = 'employee@gmail.com';
            const employee = new Employee("", 1, emailAddress);
            expect(employee.emailAddress).toBe(emailAddress)
        })
        })
        // Q - these are the same tests?
    describe('getEmployeeName', () => {
        test('returns the following statement: The name of employee is name', () => {
            // thi can be any random name
            const name = "Emily";
            // do I Have to repeat the constructor paramaters each time?
            const employee = new Employee(name);
            expect(employee.name).toBe(name);
        })

    describe('getEmployeeId', () => {
        test('returns the following statement: The id of the employee is id', () => {
            // this can be any random number
            const id = '0';
            const employee = new Employee(id);
            expect(employee.getId()).toBe(id);
        } )
    })
    describe('getEmailAddress', () => {
        // why am I writing two callbacks?
        test(`return the following statement when getEmailAddress() is called: the employee's email address is email address`, ()=> {
            const emailAddress = 'test@gmail.com';
            // why do we have to construct the function every time?
            const employee = new Employee('emily', 1, emailAddress);
            expect(employee.getEmail()).toBe(emailAddress);
        })
    })
    describe('getRole', () => {
        test('return the role of the employee', () => {
            const role = 'Employee';
            const employee = new Employee('emily', 1 , 'test@gmail.com');
            expect(employee.getRole()).toBe(role)
        })
    })
    })
        })
