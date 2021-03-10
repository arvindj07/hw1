let fs=require("fs");

function display_files(dirpath){
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

module.exports = {
  displayFn : display_files
}