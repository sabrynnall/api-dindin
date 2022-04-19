const listaDeCurso = require('../models/cursos.json');
const fs = require('fs');

const CursoController = {

    cadastrarCurso(req, res){
        const { titulo, descricao, professor } = req.body;

        if(!titulo || !descricao || !professor) {
            return res
            .status(400)
            .json({ error: 'Você precisa passar os atributos corretamente' });
        }

        listaDeCurso.push({
            titulo,
            descricao,
            professor,
        })

        fs.writeFileSync('../models/cursos.json', JSON.stringify(listaDeCurso));

        res.status(201).json({ message:'Cadastro efetuado com sucesso!' });
    }
};

module.exports = CursoController;