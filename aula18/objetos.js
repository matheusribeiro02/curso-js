/*
const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Ribeiro',
    idade: 20
};
*/

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

const pessoa1 = criaPessoa('Matheus', 'Ribeiro', 20);
const pessoa2 = criaPessoa('Pedro', 'Paulo', 20);
const pessoa3 = criaPessoa('Hiago', 'Martins', 20);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);