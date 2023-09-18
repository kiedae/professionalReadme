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
        type: 'input',
        message: "What license(s) does the application have?",
        name: 'Licensing',   
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please describe how the project should be used.';
            }
        }
    },
]).then(({title, Installation, Usage, Contributions, Tests, Licensing}) => {
    const generateReadme = `# ${title} 

## How to install the application 
${Installation}

## Contributions 
${Contributions}

## Tests 
${Tests}

## Licensing information 
${Licensing}

`;

    fs.writeFile('./README.md', generateReadme, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Readme Created');
        }
    });
});