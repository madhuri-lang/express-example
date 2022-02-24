const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

//Middleware
/*
const madMiddleWare = (res,req,next)=>{
    console.log(req);
    next();
}
app.use(madMiddleWare);
*/

// data from another folder
app.use(express.static(path.join(__dirname,"public")));

//using parameters and getting values
app.get('/hello/:name',(req,res)=>{
    res.send("Hello World! " + req.params.name);
})

app.get('/about', (req,res)=>{
   // res.send("about");
   // res.sendFile(path.join(__dirname , 'index.html'));
  // res.status(500);
   res.json({"Name":'Madhuri'});

})

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})