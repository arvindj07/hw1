let fs=require("fs");

function line_breaks(dirpath){

  // Check if file exists
  if(fs.existsSync(dirpath)){

    console.log("File Contents:");
    console.log("-------------");
    let data = fs.readFileSync(dirpath, 'utf8');
    data=data.toString();
    data=data.replace(/\n\s*\n/g, '\n');        //multiple line breaks to single line break
    
    console.log(data); 

  }else{
    console.log("File Doesn't exist");
  }
    
}

module.exports={
  lineBreakFn : line_breaks
}