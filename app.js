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


  const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
