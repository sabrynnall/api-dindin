const express = require('express');
const CursoController = require('../controllers/cursos.controller.js'); 

const routes = express.Router();

routes.post('/cursos', CursoController.cadastrarCurso);

module.exports = routes;