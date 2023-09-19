const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');


inquirer.prompt([
    { 
        type: 'input',
        message: "Please choose a title for the Readme",
        name: 'title', 
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Title name is required, not optional';
            }
        }
    },

    {
        type: 'input',
        message: "What are the installation instructions for this application?",
        name: 'Installation',  
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please include install instructions';
            }
        }
    },

    {
        type: 'input',
        message: "How does the user use this application?",
        name: 'Usage',   
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please describe how the project should be used.';
            }
        }
    },

    {
        type: 'input',
        message: "Who contributed to this Application?",
        name: 'Contributions',   
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please provide names and contributions.';
            }
        }
    },

    {
        type: 'input',
        message: "What tests did this project run through? Describe them.",
        name: 'Tests',   
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please describe how the project should be used.';
            }
        }
    },

    {
        type: 'list',
        message: "What license(s) does the application have?",
        choices: ['MIT', 'Apache v2', 'GPL', 'Ecliplse', 'None'],
        name: 'License', 
          
    },
    
    {
        type: 'input',
        message: "What is your github username?",
        name: 'Github',   
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please include your github username.';
            }
        }
    },
    {
        type: 'input',
        message: "Provide a link to your github account",
        name: 'gitlink',   
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please include your github link.';
            }
        }
    },
    {
        type: 'input',
        message: "What is your email to reach you?",
        name: 'email',   
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please include your email adress.';
            }
        }
    },
]).then(({title, Installation, Usage, Contributions, Tests, License, Github, gitlink, email}) => {
    const generateReadme = `# ${title} 
    ![Github All Releases](https://img.shields.io/badge/license-${License}-yellowgreen.svg) ![Github All Releases](https://img.shields.io/badge/git_hub-${Github}-blue)
## How to Use
${Usage}

## How to install the application 
${Installation}

## Contributions 
${Contributions}

## Tests 
${Tests}

## Where to reach me
${gitlink}
${email}


`;

    fs.writeFile('./README.md', generateReadme, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Readme Created');
        }
    });
});