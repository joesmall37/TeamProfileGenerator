const Engineer = require('../lib/engineer');


// should we test to see if the inheritence worked?

describe('Engineer', () => {
    describe('Initialization', () => {
        test('set github', () => {
            const github = 'user@github.com';
            const engineer = new Engineer("", 1, 'user@gmail.com', github);
            expect(engineer.github).toBe(github)
        })
            describe('getRole', () => {
                test('return the role of the engineer', () => {
                    const role = 'Engineer';
                    const engineer = new Engineer("", 1, 'user@gmail.com', 'user@github.com');
                    expect(engineer.getRole()).toBe(role)
                })
            })

            describe('getGithub', () => {
                test('returns the github profile of the engineer', () => {
                    const github = 'user@github.com';
                    const engineer = new Engineer("", 1, 'user@gmail.com', github);
                    expect(engineer.getGithub()).toBe(github)
                })
            })
        })

    })
