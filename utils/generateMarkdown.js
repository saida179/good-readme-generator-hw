// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![badge](https://img.shields.io/badge/license-${data.licence}-blue)
`;
}

module.exports = generateMarkdown;
