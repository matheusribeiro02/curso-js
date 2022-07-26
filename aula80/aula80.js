class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar () {
        console.log(`${this.nome} está falando.`)
    }

    comer () {
        console.log(`${this.nome} está comendo.`)

    }

    beber () {
        console.log(`${this.nome} está bebendo.`)

    }
}

const p1 = new Pessoa('Matheus', 'Ribeiro');
const p2 = new Pessoa('Pedro', 'Paulo');
const p3 = new Pessoa('Hiago', 'Martins');
const p4 = new Pessoa('Arthur', 'Alves');

console.log(p3.beber());