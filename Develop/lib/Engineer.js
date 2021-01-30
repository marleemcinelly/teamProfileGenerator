// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(gitUsername){
        super(name, id, email);
        
        this.name = name;
        this.id = id;
        this.email = email;

        this.gitUsername = gitUsername;
    }
    engineerTestLog() {
        console.log(`engineer github username: ${this.gitUsername}`);
    }
    getGitHub() {
            //I think this is intended to grab info from inquirer
        return this.gitUsername
    }
    getRole() {
            // I think this is also intended to grab info from inquirer
        return "Engineer";
    }
}

const engineer = new Engineer("Foo", 1, "test@test.com", "GitHubUser");