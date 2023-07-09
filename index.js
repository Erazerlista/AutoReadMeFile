// Importing required packages
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./util/generateMarkdown.js');

// Array of questions
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter the title of the project.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide who contributed to this project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:',
  },
];

// Functional app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log('Creating README.md...');
    writeToFile('./README.md', generateMarkdown({ ...responses }));
    console.log("Your README file has been created!");
  });
}

// Writing to README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Call the initialization function
init();


