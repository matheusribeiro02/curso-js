const nomes = ['Matheus', 'Gabriel', 'Pedro', 'Hiago'];
const idades = [1, 4, 5, 8, 9, 11, 13, 14, 15, 18, 19, 20];

// const filtrados = idades.filter(valor => valor > 10);
// console.log(filtrados);

// const total = idades.reduce(function (acumulador, valor, indice, array) {
//    if(valor % 2 === 0) acumulador.push(valor);
//    return acumulador;
// }, []);
// console.log(total);

const pessoas = [
    {nome: 'Matheus', idade: 20},
    {nome: 'Gabriel', idade: 13},
    {nome: 'Pedro Paulo', idade: 21},
    {nome: 'Hiago', idade: 19},
    {nome: 'Arthur', idade: 21}
];

const maisVelha = pessoas.reduce( function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
//console.log(maisVelha);

//const pessoasFiltradas = pessoas.filter((obj) => obj.nome.length >= 5 && obj.idade > 18);
//console.log(pessoasFiltradas);

//const names = pessoas.map((obj) => obj.nome);
//const age = pessoas.map( function(obj) {
    //delete obj.nome;
//    return {idade: obj.idade};
//});
// console.log(age);

//const numDobro = idades.map((num) => num*2);
//console.log(numDobro);

// ----------------------------------------------------------------------//

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
.filter((valor) => valor % 2 === 0)
.map((valor) => valor * 2)
.reduce((ac, valor) => ac + valor);

console.log(numerosPares);


