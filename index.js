const { response } = require('express');
const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const project = { id: uuid(), title, owner };

    projects.push(project); //esse push vai jogar a criação do nosso projeto para o nosso array

    return response.json(project); //sempre retornar o projeto recem criado e nunca exibir a lista completa 
});

app.get('/projects', (request, response) => {
    //const { title, owner } = request.query;

    return response.json(projects);

});

app.put('/projects', (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json([
        'Projeto 50',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ])
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 50',
        'Projeto 2'
    ])
});

app.listen(3000, () => {
    console.log('Servidor Executando...');
});