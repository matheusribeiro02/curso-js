const express = require('express');
const app = express();

//CRUD -> CREATE, READ, UPDATE, DELETE
//        POST    GET    PUT    DELETAR

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar form</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco!');
});

// porta
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor rodando na porta 3000');
});



