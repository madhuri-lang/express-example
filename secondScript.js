var express = require('express');
var app =express();
app.use(express.json());
app.post('/login', (req,res)=>{
    console.log("At /login of the server side...");

    var uid = req.body.uid;
    var pwd = req.body.password;

    console.log(`Given data from POST is User Id: ${uid} and Password: ${pwd}`);

    var strToReturn = "You are not a valid user, pls check the credentials...";

    if(uid=='madhuri' && pwd=='admin')
    strToReturn = "You are a valid user";

    res.send(strToReturn);
})

app.listen(3000, ()=>{
    console.log("Server is listening at http://localhost:3000");
})
