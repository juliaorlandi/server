const express = require('express');
const alunoController = require('../controller/alunoController');

const router = express.Router();

router.get('/',alunoController.getAlunos);
router.get('/:id',alunoController.getAlunoById);
router.post('/',alunoController.criaAluno);
router.put('/:id',alunoController.editaAluno);
router.delete('/:id',alunoController.deleteAluno);

module.exports = router;