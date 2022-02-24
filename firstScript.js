var express = require('express');

var app = express();

app.get('/', (req,res)=>{
    console.log("Logging at express side...");
    res.send("This is the login method..");
});

app.listen(3000, ()=>{
    console.log("Server listening at http://localhost:3000");
});