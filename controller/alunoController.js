const connection = require('../config/db');
const alunoModel = require('../models/alunoModel');

class alunoController {
    async getAlunos(req, res) {
        try {
            const [rows] = await connection.query("SELECT * FROM alunos");
            const alunos = rows.map(row => new alunoModel(row));
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao carregar dados.' });
        }
    }

    async getAlunoById(req, res) {
        try {
            const [rows] = await connection.query("SELECT * FROM alunos WHERE id=?", [req.params.id]);
            if (rows.length > 0) {
                const aluno = new alunoModel(rows[0]);
                res.json(aluno);
            } else {
                res.status(404).json({ error: 'O aluno não foi encontrado.' })
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao carregar dados.' });
        }
    }

    
}