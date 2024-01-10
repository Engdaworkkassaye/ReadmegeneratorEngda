
import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';


const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];
  
  

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
      if (err) {
        throw err;
      }
      
    });
  }


function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        writeToFile('README.md', answers);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  
  init();
