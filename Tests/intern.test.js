const intern = require('./lib/intern');
const fs = require('fs');

// general test
describe('Intern', () => {

    describe('Initialization', () => {
        test('returns an object Intern when the the new Intern is called', () => {
            const intern = new Intern;
            expect(intern instanceof Intern).toBe(true);
        })
        test('sets the name of employee when set', () => {
            const name = "Jackson";
            const intern = new Intern(name);
            expect(intern.name).toBe(name)
        })
        test('sets the id of employee when set', () => {
            const id = 5;
            const intern = new Intern("", id);
            expect(intern.id).toBe(id)
        })
        test('sets the email address of employee when set', () => {
            const emailAddress = 'intern@gmail.com';
            const intern = new Intern("", 1, emailAddress);
            expect(intern.emailAddress).toBe(emailAddress)
        })
        test('sets the school of intern when set', () => {
            const school = 'Pitt';
            const intern = new Intern("", 1, "intern@gmail.com", "Pitt");
            expect(intern.school).toBe(school)
        })
        test()
    })
    describe('getEmployeeName', () => {
        test('returns the following statement: The name of employee is name', () => {
            const name = "Jackson";
            // do I Have to repeat the constructor paramaters each time?
            const intern = new Intern();
            expect(intern.name).toBe(name);
        })

        describe('getEmployeeId', () => {
            test('returns the following statement: The id of the employee is id', () => {
                // this can be any random number
                const id = 5;
                const intern = new Intern();
                expect(intern.id).toBe(id);
            })
        })
        describe('getEmailAddress', () => {
            // why am I writing two callbacks?
            test(`return the following statement when getEmailAddress() is called: the employee's email address is email address`, () => {
                const emailAddress = 'intern@gmail.com';
                const intern = new Intern();
                expect(intern.emailAddress).toBe(emailAddress);
            })
        })
        describe('getRole', () => {
            test('return the role of the employee', () => {
                const role = 'intern';
                const intern = new Intern();
                expect(intern.role).toBe(role)
            })
        })
        describe('getSchool', () => {
            test('return the school of the employee', () => {
                const school = 'Pitt';
                const intern = new Intern();
                expect(intern.school).toBe(school)
            })
        })
    })
})
