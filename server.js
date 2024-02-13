const express= require('express');
const morgan=require('morgan');

const app=express();

// app.use(morgan("tiny"));

morgan.token("host",(req,res)=>{
    return req.headers.host;
})
app.use(morgan(`:method :url :host`))
app.use("/main",require("./route/R1"));

app.listen(3000,()=>{
    console.log("server is running");
});