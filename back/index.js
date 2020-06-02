const express = require('express');

const cors = require('cors')

const server = express();

server.use(express.json());

const projects = []

var requestsAmount = 0

server.use((req, res, next) =>{
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    server.use(cors());
    
    requestsAmount++
    console.log(requestsAmount)
    
    next()
})

function checkProjectExist(req, res, next){
    if(req.params.id >= projects.length)
        return res.status(400).json({Message: "Project ID does not exist"})
    return next()
}

server.get('/projects', (req, res) =>{
    return res.json(projects)
})

server.post('/projects', (req, res) => {
    const { id } = req.body
    const { title } = req.body

    projects.push({id: id, title: title, tasks: []})

    return res.json({Message: "Create success", projects})

})

server.post('/projects/:id/tasks', checkProjectExist, (req, res) =>{
    const { id } = req.params
    const { title } = req.body

    projects[id].tasks.push({title: title})

    return res.json({Message: "Successfully created task", projects})
})

server.put('/projects/:id', checkProjectExist, (req, res) =>{
    const { id } = req.params
    const { title } = req.body

    projects[id].title = title

    return res.json({Message: "Update success", projects})
})

server.delete('/projects/:id', checkProjectExist, (req, res) =>{
    const { id } = req.params

    projects.splice(id, 1)

    return res.json({Message: "Delete success"})
})

server.listen(3000)