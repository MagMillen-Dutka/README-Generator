
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
  if (license !== 'MIT') {
     
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } 
  else if (license !== 'APACHE') {
    
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } 
  else if (license !== 'Eclipse2.0') {
   
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } 
else {
    return ""; 
}
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "MIT") {
    return 'https://lbesson.mit-license.org/'
  }
  else if (license !== 'APACHE') {
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  else if (license !== 'Eclipse2.0') {
    return 'https://www.eclipse.org/legal/epl-2.0/'
  }  
  else {
  return "";
  }
}

  // TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License 
    
    This project uses the ${license} license, and a link for further information can be found below.`
  }
    return "";
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenses)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.licenses)}
  
  
  ## Deployed Application URL
  ${data.link};

  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  ## Usage:
  ${data.usage}
  ## Installation
  ${data.installation}
  ## Contributors
  ${data.contribution}
  ## Testing
  ${data.testing}
  ## Questions
  Please get in touch via email: ${data.email} or visit [github/${data.username}](https://github.com/${data.username}) if you have any questions.
  `;
  }
module.exports = generateMarkdown;
