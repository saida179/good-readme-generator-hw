// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

function homeWorkTitle(title){
  let generate = "# homework title: ${title} ";
  return generate
}

function homeWorkDescription(Description){
  let generate =" # homework Description: ${Description} ";
  return generate
}

module.exports = generateMarkdown;
