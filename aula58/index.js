function Pessoa(nome, sobrenome) {

    const id = 1;

        this.nome = nome;
        this.sobrenome = sobrenome;

        this.metodo = function() {
            console.log(`Método do ${ this.nome }`);
        };
}

const p1 = new Pessoa('Matheus', 'Ribeiro');
const p2 = new Pessoa('Gabriel', 'Ribeiro');

console.log(p1.nome);
p1.metodo();