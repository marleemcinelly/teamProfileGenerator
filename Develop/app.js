const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

inquirer
    .prompt([
        {
            type: 'input',
            message: `Enter the employee's name`,
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter their email',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter their ID',
            name: 'id'
        },
        {
            type: 'list',
            message: 'What is their job title?',
            name: 'role',
            choices: ["Engineer", "Intern", "Manager"]
        },
        
])
 
.then((response) => {
    switch(response.role) {
        case "Engineer" :
            inquirer.prompt([
                {
                    type: 'input',
                    message: `What's their GitHub username?`,
                    name: 'github'
                },
                {
                    type: 'list',
                    message: 'Would you like to add another employee?',
                    name: 'addMore',
                    choices: ["Yes", "No"]
                }]);
                switch(`${response.addMore}`) { 
                    case 'Yes' :
                        console.log("inquirer loops")
                        return;
                    case 'No' :
                        console.log("this is where your inquirer exits and lets the render function run")
                };
                break;
        case "Intern" :
            inquirer.prompt([
                {
                    type: 'input',
                    message: `What university do they attend?`,
                    name: 'school'
                },{
                    type: 'list',
                    message: 'Would you like to add another employee?',
                    name: 'addMore',
                    choices: ["Yes", "No"]
                }]);
                switch(`${response.addMore}`) { 
                    case 'Yes' :
                        console.log("inquirer loops")
                        return;
                    case 'No' :
                        console.log("this is where your inquirer exits and lets the render function run")
                };
                break;
        case "Manager" :
            inquirer.prompt([
                {
                    type: 'input',
                    message: `What's your office number?`,
                    name: 'officeNumber'
                },{
                    type: 'list',
                    message: 'Would you like to add another employee?',
                    name: 'addMore',
                    choices: ["Yes", "No"]
                }
            ]);
            switch(`${response.addMore}`) { 
                case 'Yes' :
                    console.log("inquirer loops")
                    return;
                case 'No' :
                    console.log("this is where your inquirer exits and lets the render function run")
            };
            break;
    }

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!  

render(employeeArray);

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

fs.writeFile(`./output/team.html`, render(employeeArray), (err) => err ? console.log(err) : console.log('File generated successfully! Check your folder!'));
    
});

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
