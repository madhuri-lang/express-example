const express = require('express');

const app = express();
app.use(express.json());

app.post('/totalsalary', (req,res)=>{
    var Basic = req.body.basic;
    var HRA = req.body.hra;
    var DA = req.body.da;
    var IT = req.body.it;
    var PF = req.body.pf;
    
    res.send({"Total salary inhand is: " : Basic+HRA+DA - (IT+PF)});
});

app.listen(3000, ()=>{
    console.log("Server is listening at http://localhost:3000");
});