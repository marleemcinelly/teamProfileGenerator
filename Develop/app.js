const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// // here's the inquirer code for command prompt, ends at differentiating employee types
inquirer
    .prompt([
        {
            type: 'list',
            message: 'What employee type would you like to add?',
            name: 'role',
            choices: [Engineer, Intern, Manager]
        },
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
            message: 'Do you have more employees to add?',
            name: "addMore",
            choices: ["Yes", "No"]
        }
    ])
    
.then((response)=>{
    // add a new employee, with type selected
    if (`${response.addMore}` === "Yes") {
        // a return, forcing the inquirer to loop again
    } else {
        // placing the writefile directly in here to allow the inquirer to exit
        const data = `./template/main.html`; //here's where the html boilerplate goes
        fs.writeFile(`./output/team.html`, data, (err) => err ? console.log(err) : console.log('File generated successfully! Check your folder!'));
    }
    
});




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
