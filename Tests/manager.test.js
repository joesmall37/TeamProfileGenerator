const Manager = require('../lib/manager');


describe('Manager', () => {
    describe('Initialize office number of manager', () => {
        test('set office number of the manager', () => {
            const officeNumber = '235';
            const manager = new Manager("", 1, "john@gmail.com", officeNumber);
            expect(manager.officeNumber).toBe(officeNumber)
        })
        })
        describe('getOffice num', () => {
            test('return the office number of the manager', () => {
                const officeNum = '235';
                const manager = new Manager("", 1, "john@gmail.com", officeNum);
                expect(manager.getOfficeNumber()).toBe(officeNum)
            })
        })
        describe('get role of manager', () => {
        test('return the role of the employee', () => {
            const role = 'Manager';
            const manager = new Manager("", 1, "john@gmail.com", '235');
            expect(manager.getRole()).toBe(role)
        })
    })
})
