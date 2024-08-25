import express from "express";
import bodyParser from "bodyParser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

app.post("/submit",(req,res)=>{
    console.log(req.body);
});

app.listen("/",(req,res)=>{
    console.log(`server is running ${port}`);
});