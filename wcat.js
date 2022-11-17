let fs = require('fs');
const { arrayBuffer } = require('stream/consumers');

let input = process.argv.slice(2);

let inputArr = [];
let tempArr = []
for(let i=0; i<input.length; i++){
  let char0 = input[i].charAt(0);
  if(char0 == "-"){
    tempArr.push(input[i]);
    
  }
  else{
    inputArr.push(input[i]);

  }
    
}
console.log(tempArr)
// console.table(inputArr);
let content = ""
for(let i=0; i<inputArr.length; i++){
      if( !fs.existsSync(inputArr[i])){
        console.log("bhai file nahee hai  " + inputArr[i])
        return;
      }
       content += fs.readFileSync(inputArr[i]) +"\r\n";
}
// console.table(content);
let contentArr = content.split('\r\n');
//  console.table(contentArr);

// check if -s is present in temporary array.
let isSpresent = tempArr.includes("-s");
if(isSpresent){
 
  for(let i=1; i<contentArr.length; i++){
  
    if(contentArr[i] == '' && contentArr[i-1]==''){
          contentArr[i] == "hi";
    }
    else if(contentArr[i] == '' && contentArr[i-1]=='hi'){
      contentArr[i] == "hi";
    }
  }
  
}
// console.table(contentArr)
let arr = [];
for(let i=0; i<contentArr.length; i++){
  if(contentArr[i] != null){
    arr.push(contentArr[i]);

  }
}
 console.table(arr);
