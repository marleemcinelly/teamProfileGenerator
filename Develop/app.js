const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// here's the inquirer code for command prompt, ends at differentiating employee types
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter your name',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter your email',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter your id',
            name: 'id'
        },
        {
            type: 'list',
            message: 'Enter your role in the company',
            name: 'role',
            choices: [Engineer, Intern, Manager]
        },
        
    ])
    //our contructor is gonna end up down here in .then probably
.then((response)=>{
    var year = new Date().getFullYear();
    var userLicense = 'placeholder';
    if (`${response.license}` === 'Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.') {
        var userLicense = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    } else if (`${response.license}` === 'Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\n 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\n 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'){
        var userLicense = `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
    } 
    const data = userLicense + `\n\n ## ${response.title}\n\n # Description\n\n ${response.description}\n\n # Table of Contents\n\n * [Installation](#-installation)\n * [Useage](#-usage)\n * [License](#-license)\n * [Contributing](#-contributing)\n * [Tests](#-tests)\n * [Questions](#-questions)\n\n # Installation\n\n ${response.install}\n\n # Usage\n\n ${response.use}\n\n # License\n\n Copyright ` + year + ` ${response.userGitHub}\n\n ${response.license}\n\n # Contributing\n\n ${response.contribute}\n\n # Tests\n\n ${response.test}\n\n # Questions?\n\n You can find me on GitHub at: (https://github.com/${response.userGitHub})\n\n You can also email me directly at: ${response.userEmail} \n\n${response.qOrC}`;
    fs.writeFile(`${response.title}.md`, data, (err) => err ? console.log(err) : console.log('File generated successfully! Check your folder!'));
});


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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
