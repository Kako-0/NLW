//importando dependências
const express = require('express');
//inicializando o express
const server = express();
//para não dar erro com os paths
const path = require('path');

//criando rota
server.use(express.static('public')).get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//lingar o server
server.listen(5500);