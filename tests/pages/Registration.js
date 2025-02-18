const { chromium } = require('playwright'); 
class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = 'input[name="firstname"]';
        this.lastNameInput = 'input[name="lastname"]';
        this.emailInput = 'input[name="emailId"]';
        this.submitButton = 'input[value="Submit"]'; // Added selector for submit button
        this.errorMessage = '.error-message';
        this.signInPortal ='//li[text()="Sign In Portal"]';
        this.menuButton = '//input[@type="checkbox"]';
        this.newUser = '//button[@id="NewRegistration"]';
        this.contactInput ='//input[@id="contactNumber"]';
        this.usernameInput ='//input[@id="usr"]';
        this.passwordInput ='//input[@id="pwd"]';
    }
    async navigate(url) {
    const browser = await chromium.launch({ headless: false }); // Set headless: true to run without opening the browser
       const page = await browser.newPage();
        await this.page.goto(url);
    }
async register(firstName, lastName, email, contact, username, password) {
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.contactInput, contact);
        await this.page.fill(this.usernameInput,username);
        await this.page.fill(this.passwordInput,password);
        await this.page.click(this.submitButton);
    }
    async click(selector) {
        await this.page.click(selector);
    }
};
