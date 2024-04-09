//Basic Url to  Qr-code Generation 
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'; 
// var qr = require('qr-image');

inquirer
  .prompt([
     {
        message:"Enter the url ",
        name:"URL"
    }

  ])
  .then((answers) => {
    // console.log(answers);
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr.png'));

    fs.writeFile("URL.txt", url ,(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });