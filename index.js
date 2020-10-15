const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//please note that I was not able to take off async without braking my code... 
const writeFileAsync = util.promisify(fs.writeFile);

async function generateHTML() {
  const question = [
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "Description",
      message: "Describe what your project will be."
    },
    {
      type: "input",
      name: "installation instructions",
      message: "what are the installation instructions for the user?"
    },
    {
      type: "input",
      name: "usage information",
      message: "what will be the usage instructions?"
    },
    {
      type: "input",
      name: "contribution guidelines",
      message: "How can the user contribute"
    },
    {
      type: "input",
      name: "test instructions",
      message: "Enter your test instructions"
    },
    {
      type: "input",
      name: "Email",
      message: "Enter your email address"
    },
    {
      type: "input",
      name: "GitHub",
      message: "Enter your GitHub username"
    }
//WHEN I choose a license for my application from a list of options

//WHEN I enter my GitHub username

//WHEN I enter my email address

//WHEN I click on the links in the Table of Contents
  ];
  const answers = await inquirer.prompt(question);
  //console.log(answers)


}

generateHTML();

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
