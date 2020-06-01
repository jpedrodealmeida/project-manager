const express = require('express');

const server = express();

server.use(express.json());

const project = []

server.get('/projects', (req, res) =>{
    return res.json(project)
})

server.post('/projects', (req, res) => {
    const { id } = req.body
    const { title } = req.body

    project.push({id: id, title: title, tasks: []})

    return res.json({Message: "Create success", project})

})

server.put('/projects/:id', (req, res) =>{
    const { id } = req.params
    const { title } = req.body

    project[id].title = title

    return res.json({Message: "Update success", project})
})


server.listen(3000)