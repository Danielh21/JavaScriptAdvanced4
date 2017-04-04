const express = require('express');
const router = express.Router();
const dbFacade = require("./dbservice");
const cors = require("cors");

/*
Projects Form:
    projects =
        title : "Some Title",
        tasks : [ {title : "Title For task!"}]
*/

function createDummy(){
    var dummyProject = new Object;
    dummyProject.title = "Just of Fun";
    dummyProject.tasks = [];
    var task = new Object;
    task.title = "Task title";
    dummyProject.tasks.push(task);
    return dummyProject;
}

router.all("/projects", cors(), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header['Access-Control-Allow-Methods'] = 'GET,HEAD,PUT,PATCH,POST,DELETE'
  res.header['Access-Control-Allow-Headers'] = ' Content-Type, Accept';
  next();
})


router.get("/projects", (req, res, next)=>{
    dbFacade.getAllProjects((data)=>{
        res.send(data);
    })
});

router.post("/projects", (req,res,next) =>{
    let project = req.body;
     dbFacade.postNewProject(project, (data)=>{
        res.json(data);
    });
});

router.put("/projects", (req,res) =>{
    let project = req.body;
    dbFacade.editProjects(project,(data) =>{
        res.send(data);
    });
});





module.exports = router;