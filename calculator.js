const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html");
});

app.post("/",(req,res)=>{
    var number1 = Number(req.body.num1);
    var number2 = Number(req.body.num2);
    var result = number1 + number2;
    res.send("The sum of 2 number = "+result);
});
app.listen(3000,()=>{
    console.log("Server Started!");
});