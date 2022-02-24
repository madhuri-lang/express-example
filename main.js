const e = require('express');
const express = require('express');
const path = require('path');
const app = express();

const port = 3000;


// data from another folder
app.use(express.static(path.join(__dirname,"static")));

app.use('/' , require(path.join(__dirname,'routes/blog.js')));

app.listen(port, ()=>{
    console.log(`Blog App listening at http://localhost:${port}`)
})