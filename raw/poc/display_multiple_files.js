let fs=require("fs");

let input= process.argv.slice(2);
let dirpath=input;    // we r passing the whole array,as we want to loop through all paths

function display_multiple_files(dirpath){
  console.log("File Contents are being Displayed Below:");
  console.log("--------------------------------");

  for(let path of dirpath){
    // Check if file exists
    if(fs.existsSync(path)){   
      let data = fs.readFileSync(path, 'utf8');
      console.log(data.toString());  
    }else{
      console.log("--------------------------------");
      console.log("File Doesn't exist");
      console.log("--------------------------------");
    }
     
  }
  
}

display_multiple_files(dirpath);