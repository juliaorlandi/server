const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const alunoRoutes = require('./routes/alunoRoutes');

const app = express()
const port = 8000;
app.use (bodyParser.json())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/alunos', alunoRoutes);

app.listen(port, () => {
    console.log(`servidor funcionando na porta ${port}`);
})