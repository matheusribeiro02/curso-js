const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// http://facebook.com/profiles/12345?campanha=googleads&nome_campanha=qualquer

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar form</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.nome);

});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor rodando na porta 3000');
});



