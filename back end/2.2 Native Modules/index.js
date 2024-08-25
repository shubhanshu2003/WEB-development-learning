const { log } = require("console");
const fs = require("fs");

fs.writeFile("doc.txt", "hello i am shubhanshu", (err) =>{
    if(err) throw err;
    console.log("file saved");
    
});

fs.readFile("doc.txt","utf8",  (err,data)=>{
    if(err) throw err ;
    console.log(data);
})