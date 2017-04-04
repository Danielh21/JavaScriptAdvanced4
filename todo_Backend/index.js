const express = require("express");
const app = express();  
const db = require("./db");
const url = "mongodb://toDoUser:Hest123@ds119588.mlab.com:19588/todo";
const api = require("./api");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


var numberToBeEdited = 99; // Start Value of 99

// app.all("/projects", cors(), function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header['Access-Control-Allow-Methods'] = 'GET,HEAD,PUT,PATCH,POST,DELETE'
//   res.header['Access-Control-Allow-Headers'] = ' Content-Type, Accept';
//   next();
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api",api);

app.listen(3000, ()=>{
console.log("Server Started on port 3000");
db.connect(url, function(err){
// Call back, which is called after trying to get connections
        if(err){
            console.log("Connection failed!");
        }
        else{
        console.log("Connected Succesfully to Database");
        }
    });
});


