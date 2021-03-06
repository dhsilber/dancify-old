const fs = require("fs");
import { JSDOM } from 'jsdom'

describe('Index page', () => {
    let document: Document
    beforeAll((done) => {
        const filename = __dirname + '/../src/views/index.html'
        const contents = fs.readFileSync(filename, 'utf8');
        const dom: JSDOM = new JSDOM(contents);
        document = dom.window.document
        done();
    })

    describe('authentication button', () => {
        let button: HTMLElement | null
        beforeAll((done) => {
            button = document.getElementById('authenticate-btn')
            done()
        })

        it('should exist"', (done) => {
            expect(button).not.toBeNull()
            done();
        })

        it('should actually be a button"', (done) => {
            let buttonType = Object.prototype.toString.call(button)
            expect(buttonType).toEqual("[object HTMLButtonElement]")
            done();
        })

        it('should have proper label', (done) => {
            if (!button) {
                fail("Authenticate button missing, so has no name")
            }
            else {
                expect(button.textContent).toEqual("Authenticate")
            }
            done();
        })
    })

    describe('login button', () => {
        let button: HTMLElement | null
        beforeAll((done) => {
            button = document.getElementById('login-btn')
            done()
        })

        it('should exist"', (done) => {
            expect(button).not.toBeNull()
            done();
        })

        it('should actually be a button"', (done) => {
            let buttonType = Object.prototype.toString.call(button)
            expect(buttonType).toEqual("[object HTMLButtonElement]")
            done();
        })

        it('should have proper label', (done) => {
            if (!button) {
                fail("Login button missing, so has no name")
            }
            else {
                expect(button.textContent).toEqual("Login")
            }
            done();
        })
    })

})
