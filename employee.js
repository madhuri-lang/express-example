const express = require('express');

const app = express();

const employee = [
    {id:1,name:"Madhuri",dept:"IT",designation:"FullStack Developer"},
    {id:2, name:'Sindhu',dept:'IT',designation:'FullStack Developer'},
    {id:3,name:'Deepthi',dept:'QA',designation:'QA Analyst'},
    {id:4,name:'JayaPrasanna',dept:'QA',designation:'QA Trainee'}
]


app.get('/getAllEmployeeData',(req,res)=>{
    console.log("Employee Details");
    res.send(employee);
});


app.listen(3000, ()=>{
    console.log("Server is listening at http://localhost:3000");
});