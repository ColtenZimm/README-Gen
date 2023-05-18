// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge = generateBadge(userResponse.license)
  var licenseUrl = generateLicenseUrl(userResponse.license)
  var result = (`# ${userResponse.title}
  \n![License](${licenseBadge} \n
    ${userResponse.description}
    \n## Table of Contents
    \n* [Installation](#Installation)
    \n* [Instructions](#Instructions)
    \n* [Contributors](#Contributors)
    \n* [Tests](#Tests)
    \n* [License](#License)
    \n* [Author](#Author)
    \n## Installation
    \n${userResponse.installation}
    \n## Usage
    \n${userResponse.usage}
    \n## Contributing
    \n${userResponse.contributing}
    \n## Tests
    \n${userResponse.tests}
    \n## License
    \nThis project is licensed under the ${userResponse.license} - see the [License](${licenseUrl}) page.
    \n## Author
    \n![ProfileImage](${userInfo.avatar_url})
    \n${userInfo.name}
    \nLocation: ${userInfo.location}
    \n[GitHub](${userInfo.html_url})`)

    return result;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
