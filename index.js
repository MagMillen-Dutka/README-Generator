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
        type: 'list',
        message: 'Please select license type.',
        name: 'license',
        choices: ["none", "MIT", "APACHE", "Eclipse2.0"],
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
function writeToFile(name, data) {
    return fs.writeFileSync(path.join(process.cwd(),name),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Your README.md file will now appear in your IDE");
        writeToFile('./README/', generateMarkdown({...responses}));
    });
}
// Function call to initialize app
init();
