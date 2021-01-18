//week 9 day 3 activity 40 grabbing code
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

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

  ]);
}

async function init() {
  try{
      const data = await promptUser();
      const newMD = generateMarkdown(data);

      await writeFileAsync('README.md', newMD, 'utf-8');
      console.log('Creating a New README.md file!');
  }
  catch(error) {
      console.log(error);
  }
}

init();
