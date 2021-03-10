let fs=require("fs");

let input= process.argv.slice(2);
let dirpath=input[0];

function display_file(dirpath){
  
  //Check if file exists
  if(fs.existsSync(dirpath)){

    console.log("File Contents are being Displayed Below:");
    console.log("--------------------------------");
    let data = fs.readFileSync(dirpath, 'utf8');
    console.log(data.toString()); 
    
  }else{
    console.log("File Doesn't exist");
  }
    
}

display_file(dirpath);