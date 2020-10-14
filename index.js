//GIVEN a command-line application that accepts user input
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

//WHEN I am prompted for information about my application repository

function promptUser() {
  return inquirer.prompt([
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
      message: "?"
    },
    {
      type: "input",
      name: "usage information",
      message: "What is your favorite food?"
    },
    {
      type: "input",
      name: "contribution guidelines",
      message: ""
    },
    {
      type: "input",
      name: "test instructions",
      message: ""
    },
    {
        type: "input",
        name: "question",
        message: "?"
    }
  ]);
}

//WHEN I choose a license for my application from a list of options

//WHEN I enter my GitHub username

//WHEN I enter my email address

//WHEN I click on the links in the Table of Contents
