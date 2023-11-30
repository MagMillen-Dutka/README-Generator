// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown.js');
const path = require('path');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please write URL link to the deployed application',
        name: 'link',
      },
      {
        type: 'input',
        message: 'Please describe this project.',
        name: 'description',
      },
      {
        type: 'checkbox',
        message: 'Please select license type.',
        name: 'license',
        choices: ["MIT License", "APACHE License 2.0", "GNU General Public License v3.0", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public Lincense v2.1", "Mozilla Public License 2.0", "The Unilicense" ],
      },
      {
        type: 'input',
        message: 'Please describe how to install this project.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please describe the usage.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please provide the test instructions.',
        name: 'testing',
      },
      {
        type: 'input',
        message: 'Please describe any notable contributions and collaborations.',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Please write your Github ID.',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Please write your email address.',
        name: 'email',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Your README.md file will now appear in your IDE");
        writeToFile('./README/', generateMarkdown({responses}));
    });
}
// Function call to initialize app
init();
