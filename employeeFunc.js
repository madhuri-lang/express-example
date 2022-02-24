const express = require('express');

const app = express();
app.use(express.json());
const employee = [
    {id:1,name:"Madhuri",dept:"IT",designation:"FullStack Developer"},
    {id:2, name:'Sindhu',dept:'IT',designation:'FullStack Developer'},
    {id:3,name:'Deepthi',dept:'QA',designation:'QA Analyst'},
    {id:4,name:'JayaPrasanna',dept:'QA',designation:'QA Trainee'}
];

app.get('/getAllEmployees' , (req,res)=>{
    console.log("All the employee details is sent... ");
    res.send(employee);
});

app.get('/getEmployeeById/:id' ,(req,res)=>{
    var ID = req.params.id;
    employee.forEach((emp)=>{
        if(ID == emp.id)
        {
           res.send(emp);
        }
    })
   
});

app.get('/getEmployeeByName/:name' ,(req,res)=>{
    var Name = req.params.name;
    employee.forEach((emp)=>{
        if(Name == emp.name)
        {
           res.send(emp);
        }
    })
   
});


app.post('/insertEmployeeData', (req,res)=>{
    // var Id = req.body.id;
    // var name = req.body.name;
    // var dept = req.body.dept;
    // var designation = req.body.designation;

    // console.log(`given data is : ${Id}  ${name} ${dept} ${designation}`);
      employee.push(req.body);
    res.send("Employee Details inserted");
});


app.put('/updateEmployeeData/:id' ,(req,res)=>{
     var tempId = req.body.id;
     var tempName = req.body.name;
    var tempdept = req.body.dept;
     var tempdesignation = req.body.designation;

    for(let i=0;i<employee.length;i++)
    {
        if(employee[i].id ==tempId)
        {
            employee[i].id = tempId;
            employee[i].name = tempName;
            employee[i].dept = tempdept;
            employee[i].designation = tempdesignation;

        }
    }
    res.send("Employee Details updated");
})

app.delete('/deleteEmployee/:id', (req,res)=>{
    var Id = req.params.id;
    for( var i=0;i<employee.length;i++)
    {
        if(employee[i].id == Id)
        {
            employee.slice(i,1);
            break;
        }
        res.send("Record Deleted Successfully...");
    }
});

app.listen(3000, ()=>{
    console.log("Server is listening at http://localhost:3000");
});

