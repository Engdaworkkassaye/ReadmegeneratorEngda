


function renderLicenseBadge(license) {
  let badge = '';
 
  if (license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    badge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  
  return badge;
}

function renderLicenseLink(license) {
  let link = '';
  
  if (license === 'MIT') {
    link = 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache 2.0') {
    link = 'https://opensource.org/licenses/Apache-2.0';
  }
 
  return link;
}

function renderLicenseSection(license) {
  let section = '';
 
  if (license) {
    section = `## License\n\nThis project is licensed under the [${license}](${renderLicenseLink(
      license
    )}) license. ${renderLicenseBadge(license)}`;
  }
  return section;
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For additional questions, contact [${data.username}](https://github.com/${data.username}) via email: ${data.email}.
`;
}

export { generateMarkdown };




