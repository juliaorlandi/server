const express = require('express');
const alunoController = require('../controller/alunoController');

const router = express.Router();

router.get('/',alunoController.getAllAlunos, (req,res) => {  
    const resposta = alunoController.getAllAlunos();
    res.send(resposta);
});

router.get('/:id',alunoController.getAlunoById, (req,res) => {  
    const { id } = req.params;
    const resposta = alunoController.getAlunoById(id);
    res.send(resposta);
});

router.post('/',alunoController.criaAluno, (req,res) => {
    const newAluno = req.body;
    const aluno = alunoController.criaAluno(newAluno);
    aluno.then(alunoCriado => res.status(201).json(alunoCriado)).catch(error => res.status(404).json(error.message));
});

router.put('/:id',alunoController.editaAluno, (req,res) => {  
    const alunoId = req.params.id;
    const resposta = alunoController.editaAluno(alunoId);
    res.send(resposta);
});

router.delete('/:id',alunoController.deleteAluno, (req,res) => {  
    const { id } = req.params;
    const resposta = alunoController.deleteAluno(id);
    res.send(resposta);
});

module.exports = router;