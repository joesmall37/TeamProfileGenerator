const Intern = require('../lib/intern.js');

// general test
describe('Intern', () => {

    describe('Initialization', () => {
        test("get school name when set", () => {
            const school = "Pitt";
            const intern = new Intern("", 1, "test@pitt.edu", school);
            expect(intern.school).toBe(school);
        });

        test("get role method returns intern", () => {
            const role = "Intern";
            const intern = new Intern("", 1, "test@pitt.edu", "Pitt");
            expect(intern.getRole()).toBe(role);
        });

        test("Get school name from getSchool method", () => {
            const school = "Pitt";
            const intern = new Intern("", 1, "test@pitt.edu", school);
            expect(intern.getSchool()).toBe(school);
        });

    })
})
