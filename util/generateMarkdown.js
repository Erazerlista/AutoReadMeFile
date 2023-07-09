// Create a function that returns a badge based on what license is chosen.
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "GPL 3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "BSD 3-Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return "";
  }
}

// Create a function that returns license link
function renderLicenseLink(license) {
  if (license !== "'MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'") {
    return '\n* [License](#license)\n*';
  }
  return "";
}


// Create a function to return the license section of README
function renderLicenseSection(license) {
  if (license !== "'MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'") {
    return `## License
Licensed under ${license} license.`;
  }
  return "";
}

// Create function to generate a markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Requirements](#requirements)
* [Usage](#usage)
* [Contact-Me](#contact-me)
* [Contributors](#contributors)
* [Tests](#tests)
${renderLicenseLink(data.license)}

## Description
${data.description}

## Requirements
${data.requirements}

## Usage
${data.usage}

## Contact-Me
* Name - ${data.name}
* Email - ${data.email}
* Github - [${data.creator}](http://github.com/${data.creator}/)

## Contributors
${data.contributors}

## Testing
\`\`\`
${data.tests}
\`\`\`

${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
