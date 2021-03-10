let fs=require("fs");
const readline = require('readline'); 

function no_nonempty_lines(dirpath){

  // Check if file exists
  if(fs.existsSync(dirpath)){

    console.log("File Contents:");
    console.log("-------------");

    // Creating a readable stream from file 
    const file = readline.createInterface({ 
      input: fs.createReadStream(dirpath), 
      output: process.stdout, 
      terminal: false
    }); 

    // Printing the content of file line by 
    let count=1;
    file.on('line', (line) => { 
        if(line.length>0){            // check if line is empty or not    
          console.log(`${count}.${line}`); 
          count++;
        }else{
          console.log(line); 
        }
    
    }); 

  }else{
    console.log("File Doesn't exist");
  }

}

module.exports={
  nonEmptyLinesFn : no_nonempty_lines
}