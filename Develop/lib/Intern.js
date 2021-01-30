// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(school){
        super(name, id, email);
        
        this.name = name;
        this.id = id;
        this.email = email;

        this.school = school;
    }
    internTestLog() {
        console.log(`intern school: ${this.school}`);
    }
    getSchool() {
        //I think this is intended to grab info from inquirer
        return this.school;
    }
    getRole() {
        // I think this is also intended to grab info from inquirer
        return "Intern";
    }
}

const intern = new Intern("Foo", 1, "test@test.com", "UCLA");