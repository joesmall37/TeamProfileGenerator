const Engineer = require('../lib/engineer');
const fs = require = ('fs');

// should we test to see if the inheritence worked?

describe('Engineer', () => {
    describe('Initialization', () => {
        test('engineer', () => {
            const engineer = new Engineer();
            expect(engineer instanceof Engineer).toBe(true)
        })
        test('id', () => {
            const id = 3;
            // do we have to repeat everything?
            const engineer = new Engineer("", 3);
            expect(engineer.id).toBe(id)
        })
        test('email address', () => {
            const emailAddress = "engineer@gmail.com";
            const engineer = new Engineer("", 3, emailAddress);
            expect(engineer.email).toBe(true)
        })
    });

    describe('getRole', () => {
        test('provides the role of the engineer in the company', () => {
            const role = 'Engineer';
            const engineer = new Engineer();
            expect(engineer.role).toBe(role)
        })

        describe('getEmployeeName', () => {
            test('returns the following statement: The name of engineer is name', () => {
                // thi can be any random name
                const name = "Sara";
                const manager = new Manager();
                expect(manager.name).toBe(name);
            })

        describe('getEmployeeId', () => {
                test('returns the following statement: The id of the employee is id', () => {
                    // this can be any random number

                    const id = 4;
                    const engineer = new Engineer();
                    expect(engineer.id).toBe(id);
                })
            })
            describe('getEmailAddress', () => {
                test(`return the following statement when getEmailAddress() is called: the employee's email address is email address`, () => {
                    const emailAddress = 'engineer@gmail.com';
                    const engineer = new Engineer();
                    expect(engineer.emailAddress).toBe(emailAddress);
                })
            })
            describe('getRole', () => {
                test('return the role of the employee', () => {
                    const role = 'engineer';
                    const engineer = new Engineer();
                    expect(engineer.role).toBe(role)
                })
            })

            describe('getGithub', () => {
                test('returns the github profile of the engineer', () => {
                    const github = "engineer@github.com";
                    const engineer = new Engineer();
                    expect(engineer.github).toBe(github)
                })
            })
        })

    })

})
