const manager = require('./lib/manager');
const fs = require('fs');



describe('Manager', () => {

    describe('Initialization', () => {
        test('returns an object Mangager when the the new Employee is called', () => {
            const manager = new Manager;
            expect(manager instanceof Manager).toBe(true);
        })
        // is this repetitive if it's inherited?
        //----Q --- I tried to write describe for EACH test -- Q
        test('sets the name of manager when set', () => {
            const name = "Kevin";
            const manager = new Manager(name);
            expect(manager.name).toBe(name)
        })
        test('sets the id of manager when set', () => {
            const id = 2;
            const manager = new Manager("", id);
            // ----Q---  does order matter when initializing?? --- Q
            expect(manager.id).toBe(manager)
        })
        test('sets the email address of manager when set', () => {
            const emailAddress = 'manager@gmail.com';
            const manager = new Manager("", 2, emailAddress);
            expect(manager.emailAddress).toBe(emailAddress)
        })
        test()
    })
    describe('getEmployeeName', () => {
        test('returns the following statement: The name of manager is name', () => {
            // thi can be any random name
            const name = "Kevin";
            const manager = new Manager();
            expect(manager.name).toBe(name);
        })

        describe('getEmployeeId', () => {
            test('returns the following statement: The id of the employee is id', () => {
                // this can be any random number
                const id = 0;
                const manager = new Manager();
                expect(manager.id).toBe(id);
            })
        })
        describe('getEmailAddress', () => {
            // why am I writing two callbacks?
            test(`return the following statement when getEmailAddress() is called: the employee's email address is email address`, () => {
                const emailAddress = 'manager@gmail.com';
                // why do we have to construct the function every time?
                const manager = new Manager();
                expect(manager.emailAddress).toBe(emailAddress);
            })
        })
        describe('getRole', () => {
            test('return the role of the employee', () => {
                const role = 'manager';
                const manager = new Manager();
                expect(manager.role).toBe(role)
            })
        })
    })
})
