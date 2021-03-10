
function help(){
  console.log(`General Syntax:
  wcat [options] [files]
  option to remove big line break (-s)
  option to add line number to non empty lines (-b)
  option to add line numbers to all lines (-n) 
  Commands:
  1- node wcat.js filepath => displays content of the file in the terminal 
  2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order.
  3- node wcat.js -s filepath => convert big line breaks into a singular line break
  4- node wcat -n filepath => give numbering to all the lines 
  5- node wcat -b filepath => give numbering to non-empty lines
  We can mix and match the options.`);
}

module.exports={
  help
}