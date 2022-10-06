// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const util = require("util");

const generateMarkdown = require ('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the name of your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description explaining your project'
    }, 
    {
        type: 'input',
        name: 'install',
        message: 'What is the installation process for your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Did you use any license for this project? If so, please list.'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Are any contributions allowed for this project?'
    },
    {   type: 'input',
        name: 'test',
        message: 'Are there any tests that can run to execute deployment'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err)
        }
        console.log("Successfully created README file")
    })
}

const writeFileAsync = util.promisify(writeToFile)
// TODO: Create a function to initialize app
async function init() {
    const input = await inquirer.prompt(questions);
    const useMarkdown = generateMarkdown(input);
}

// Function call to initialize app
init();
