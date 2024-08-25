import express from "express";
const app=express();
const port=3000;

app.listen(port , () =>{
    console.log(`server is running in ${port}.`)
});

app.get("/", (req,res)=>{
res.send("<h1>hello<h1>");  
});

app.get("/contact",(req,res)=>{
    res.send("<h1>123456789<h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>my namae is shubhanshu <h1>");
});