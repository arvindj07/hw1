let fs=require("fs");
const readline = require('readline'); 

let input= process.argv.slice(2);
let dirpath=input[0];

function no_all_lines(dirpath){

  // Check if file exists
  if(fs.existsSync(dirpath)){

    console.log("File Contents:");
    console.log("-------------");

    // Creating a readable stream from file 
    // readline module reads line by line  
    // but from a readable stream only. 
    const file = readline.createInterface({ 
      input: fs.createReadStream(dirpath), 
      output: process.stdout, 
      terminal: false
    }); 

    // Printing the content of file line by 
    //  line to console by listening on the 
    // line event which will triggered  
    // whenever a new line is read from 
    // the stream 
    let count=1;
    file.on('line', (line) => { 
        console.log(`${count}.${line}`); 
        count++;
    }); 

  }else{
    console.log("File Doesn't exist");
  }

}

no_all_lines(dirpath);