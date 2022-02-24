const e = require('express');
var express = require('express');
var app =express();
app.use(express.json());

app.get("/getAllData",(req,res)=>{
    console.log("In get of /getAllData...");
    res.send("In GET of /getAllData...");
})

app.post("/insertEmployee" , (req,res)=>{
    var empId = req.body.empId;
    var name = req.body.name;
    var dept = req.body.dept;
    var designation = req.body.designation;

    console.log(`given data is : ${empId}  ${name} ${dept} ${designation}`);

    res.send("In POST of /insertEmployee..");
})

app.put("/updateEmployee" ,(req,res)=>{
    res.send("In PUT of /updateEmployee...");
})

app.delete("/deleteEmployee",(req,res)=>{
    res.send("In DELETE of /deleteEmployee");
})

app.listen(3000, ()=>{
    console.log("Server is listening at http://localhost:3000");
})