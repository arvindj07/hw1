
let displayObj = require("./commands/display_files");
let lineBreakObj= require("./commands/line_breaks");
let num_all_linesObj= require("./commands/no_all_lines");
let num_nonempty_lineObj= require("./commands/no_nonempty_lines");
let lineBreak_and_numObj = require("./commands/lineBreak_and_num");
let helpObj= require("./commands/help");

let options=["-s","-n","-b"];
let input=process.argv.slice(2);

let count=0;
for(let value of input){
  if(options.includes(value)){
    count++;
  }else{
    break;
  }
}


let option1="";
let option2="";

if(input.includes("-s")){
  option1="-s";
}

for(let value of input){
  if(value=="-b" || value=="-n"){
    option2=value;
    break;
  }
}

if(option1.length>0 && option2.length>0){
  lineBreak_and_numObj.lineBreakAndNo(input[count],option2);
  
}else if(option1.length>0){               // -s
  lineBreakObj.lineBreakFn(input[count]);

}else if(option2.length>0){               // -n or -b
  if(option2=="-n"){
    num_all_linesObj.allLinesFn(input[count]);
  }else{
    num_nonempty_lineObj.nonEmptyLinesFn(input[count]);
  }

}else{
  input=input.slice(count);

  if(input[0]=="help"){
    helpObj.help();
  }else{
    displayObj.displayFn(input);
  }
  
}

 
 
