const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');



// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;
  
//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input', 
      name: 'github', 
      message: 'Enter your GitHub Username (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub Username!');
          return false;
        }
      }
    },
    {
      type: 'input', 
      name: 'about', 
      message: 'Provide some information about yourself:'
    }
  ]);
};




const promptProject = portfolioData => {

  // If there's no 'projects' array property, create one
if (!portfolioData.projects) {
  portfolioData.projects = [];
}

  console.log(`
=================
Add a New Project
=================
`);

return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your Project Name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your Project Description!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'languages',
    message: 'What did you build this project with? (Check all that apply)',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  },
  {
    type: 'input',
    name: 'link',
    message: 'Enter the GitHub link to your project. (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your Project Link!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'feature',
    message: 'Would you like to feature this project?',
    default: false
  },
  {
    type: 'confirm',
    name: 'confirmAddProject',
    message: 'Would you like to enter another project?',
    default: false
  }
])

.then(projectData => {
  portfolioData.projects.push(projectData);
  if (projectData.confirmAddProject) {
    return promptProject(portfolioData);
  } else {
    return portfolioData;
  }
});
};


// promptUser()
//   .then(answers => console.log(answers))
//   .then(promptProject)
//   .then(projectAnswers => console.log(projectAnswers))
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });


// const profileDataArgs = process.argv.slice(2);

// console.log(profileDataArgs);

// const [name, github] = profileDataArgs;

// console.log(name, github);



// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);


//where node is installed, and also where this code is saved
// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

//takes 2 items, puts them in the array
// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);



//takes 2 items, puts them in the array - same as above, but const
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
//   };
  
//   printProfileData(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//       console.log(profileDataArr[i]);
//     }
//   };

// const printProfileData = profileDataArr => {
    // This...
    // for (let i = 0; i < profileDataArr.length; i += 1) {
    //   console.log(profileDataArr[i]);
    // }
  
    // console.log('================');
  
    // Is the same as this...
//     profileDataArr.forEach((profileItem) => {
//       console.log(profileItem)
//     });
//   };

//   profileDataArr.forEach(profileItem => console.log(profileItem));






//   const profileDataArgs = process.argv.slice(2, process.argv.length);

//   const name = profileDataArgs[0];
//   const github = profileDataArgs[1];



// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// const generatePage = () => 'Name: Jane, Github: janehub';
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// console.log(generatePage('Jane', 'janehub'));

// const generatePage = (name, github) => {
//     return `
//     <!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//     </head>
  
//     <body>
//       <h1>${name}</h1>
//       <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
//   };

//   fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });
