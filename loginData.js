var express = require('express');
var app= express();

app.get('/login' , (req,res)=>{
    console.log("At /login of server side...");

    var uid = req.query.uid;
    var pwd = req.query.password;

    console.log(`Given data fro User Id is ${uid} pwd is ${pwd}`);

    var strToReturn = "You are not a valid user, pls check the credentials...";

    if(uid=='madhuri' && pwd=='admin')
    strToReturn = "You are a valid user";

    res.send(strToReturn);
})

app.listen(8001, ()=>{
    console.log("Server is listening at http://localhost:8001");
})