// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "none") {
    return '![Github license](https://img.shields.io/badge/License-MIT-yellow.svg';
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "none")
  {
    return  `\n[License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none") {
    return `## License
    
      ${license} license is to be used for this project.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ${renderLicenseBadge(data.license)};
  
  ## Deployed Application URL
  ${data.link};

  ## Table of Contents
  * [Description](#description)
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  
  ${renderLicenseSection(data.license)};
  ${renderLicenseLink(data.license)};


  ## Description
  ${data.description}
  ## How to Use This Application:
  ${data.usage}
  ## Contributors
  ${data.contribution}
  ## Testing
  ${data.testing}
  ## Questions
  Please get in touch via email: ${data.email} or visit [github/${data.username}](https://github.com/${data.username}) if you have any questions.
  `;
  }
module.exports = generateMarkdown;
