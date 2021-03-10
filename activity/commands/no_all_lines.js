let fs=require("fs");
const readline = require('readline'); 

function no_all_lines(dirpath){

  // Check if file exists
  if(fs.existsSync(dirpath)){

    console.log("File Contents:");
    console.log("-------------");

  
    const file = readline.createInterface({ 
      input: fs.createReadStream(dirpath), 
      output: process.stdout, 
      terminal: false
    }); 

  
    let count=1;
    file.on('line', (line) => { 
        console.log(`${count}.${line}`); 
        count++;
    }); 

  }else{
    console.log("File Doesn't exist");
  }

}

module.exports={
  allLinesFn : no_all_lines
}