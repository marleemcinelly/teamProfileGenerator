// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(officeNum){
        super(name, id, email);
        
        this.name = name;
        this.id = id;
        this.email = email;

        this.officeNum = officeNum;
    }
    engineerTestLog() {
        console.log(`manager office number: ${this.officeNum}`);
    }
    getOffice() {
            //I think this is intended to grab info from inquirer
        return this.officeNum;
    }
    getRole() {
            // I think this is also intended to grab info from inquirer
        return "Manager";
    }
}

const manager = new Manager("Foo", 1, "test@test.com", 100);