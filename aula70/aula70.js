const pessoa1 = new Object();
pessoa1.nome = 'Matheus';
pessoa1.sobrenome = 'Ribeiro';

const pessoa2 = {
    nome: 'Matheus',
    sobrenome: 'Ribeiro'
};

//console.log(pessoa1, pessoa2);


// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
  
    Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra a chave
      //value: estoque, // valor
      //writable: false, // pode alterar
      configurable: false,  // configurável
      get: function(){
        return estoque;
      },
      set: function(valor){
        if (typeof valor !== 'number') {
            console.log('Envie um numero');
            return;
        }
        estoquePrivado = valor;
      }
    });
}
  
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
console.log(p1.estoque);


