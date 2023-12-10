const connection = require('../config/db');
const alunoModel = require('../models/alunoModel');

class alunoController {
    async getAllAlunos(req, res) {
        try {
            const [rows] = await connection.query('SELECT * FROM alunos');
            const alunos = rows.map(row => new alunoModel(row));
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao carregar dados.' });
        }
    }

    async getAlunoById(req, res) {
        try {
            const [rows] = await connection.query('SELECT * FROM alunos WHERE id=?', [req.params.id]);
            if (rows.length > 0) {
                const aluno = new alunoModel(rows[0]);
                res.json(aluno);
            } else {
                res.status(404).json({ error: 'O aluno não foi encontrado.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao carregar dados.' });
        }
    }

    async criaAluno(req, res) {
        try {
            const formData = req.body;
            const newAluno = new alunoController({...formData});
            await connection.query('INSERT INTO alunos (nome,curso,periodo) VALUES (?,?,?)', [
                formData.nome, 
                formData.curso, 
                formData.periodo
            ]);
            res.status(201).json({success:true, message: 'Aluno criado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao carregar dados.' });  
        }
    } 
    
    async editaAluno(req, res) {
        try {
            const alunoId = req.params.id;
            const formData = req.body;
            await connection.query('UPDATE alunos SET nome=?, curso=?, periodo=? WHERE id=?', [
                formData.nome,
                formData.curso,
                formData.periodo,
                alunoId
            ]);
            res.json({id:alunoId,...formData});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao carregar dados.' });
        }
    }

    async deleteAluno(req, res) {
        try {
            const alunoId = req.params.id;
            const result = connection.query('DELETE FROM alunos WHERE id=?', [alunoId]);
            
            res.json ({success:true});

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao carregar dados.' });
        }
    }

    
}

module.exports = new alunoController();