const Employee = require('../lib/employee');
const Engineer = require('./lib/engineer');
const fs = require = ('fs');

// should we test to see if the inheritence worked?

describe('Engineer', () => {
    describe('Initialization', () => {
        test('engineer', () => {
            const engineer = new Engineer();
            expect(engineer instanceof Engineer).toBe(true)
        })
        test('id', () => {
            const id = 2;
            // do we have to repeat everything?
            const engineer = new Engineer("", 2);
            expect(engineer.id).toBe(id)
        })
        test('email address', () => {
            const emailAddress = "test@gmail.com";
            const engineer = new Engineer("", 2, "test@gmail.com");
            expect(engineer.email).toBe(true)
        })
    describe('getRole', () => {
        test('provides the role of the engineer in the company', () => {
            const role = 'Engineer';
            const engineer = new Engineer();
            expect(engineer.role).toBe(role)
        })
    describe('getName', () =>{
        test('', () => {

        })

    })
    })
    describe('getID', () => {
        test('', () => {

        })


    })

    describe('getEmailAddress', () => {
        test('', () => {

        })


    })





    })



})
