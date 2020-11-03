//importando dependências
const express = require('express');
//para não dar erro com os paths
const path = require('path');

const pages = require('./pages.js');

//inicializando o express
const server = express();
//criando rota
server
    .use(express.urlencoded({extended: true}))
    //'use' para pegar arquivos estáticos
    .use(express.static('public'))
    //'set' para configurar o template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //'get' para criar uma rota
    .get('/', pages.index)
    .get('/pagOrfanato', pages.orfanato)
    .get('/pagOrfanatos', pages.orfanatos)
    .get('/criarOrfanato', pages.criarOrfanato)
    .post('/save-orfanato', pages.saveOrfanatos);

//lingar o server
server.listen(5500);