const nome = 'Matheus';
const sobrenome = 'Ribeiro';

const falaNome = (nome, sobrenome) => {
    console.log(` O nome é: ${nome} ${sobrenome}`);
};

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.nome = nome;
module.exports.sobrenome = sobrenome;
exports.outraCoisa = 'Outra coisa';
this.Pessoa = Pessoa;