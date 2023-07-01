const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

const port = 7000;


const dbb = require('./config/mongoose');


// --------------Static files--------//
// app.use(express.urlencoded());

app.use(express.urlencoded());

app.use(express.json());
// app.use(bodyParser.json());
//Using express router
app.use('/', require('./routes'));


app.listen(port , function(error){
    if(error){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})
