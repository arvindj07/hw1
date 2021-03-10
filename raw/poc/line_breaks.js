let fs=require("fs");

let input= process.argv.slice(2);
let dirpath=input[0];

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

line_breaks(dirpath);