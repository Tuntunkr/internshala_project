const dotenv = require("dotenv");
const express = require("express");

const app=express();

//congfig
dotenv.config({path:'./config.env'});
 
const PORT = process.env.PORT
// database connect
app.use(express.json());
//mongoose import
require('./db/conn')

app.use(require('./router/auth'));

// middleware function...

const middleware=(req,res,next)=>{
    console.log(`hello about page`);
    next();
}


app.get('/',(req,res)=>{
    res.send("hello world from the server")

});
app.get('/about',middleware,(req,res)=>{
    console.log("hello about")
    res.send("hello , I am About page ")
    
});
app.get('/contact',(req,res)=>{
    // res.cookie("test ", "tuntun")
    res.send("hello contact world from the server")
    
});
app.get('/signin',(req,res)=>{
    res.send("hello login world from the server")
    
});

app.get('/signup',(req,res)=>{
    res.send("hello Registration  world from the server")
    
});

console.log("subscribe my channel");

app.listen(PORT,()=>{
    console.log(`connection is live on this PORT no ${PORT}`);
})