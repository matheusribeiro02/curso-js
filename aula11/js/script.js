alert('Matheus');
let c = window.confirm('Confirme por favor!');

if(c) {
    console.log("deu certo");
} 

let num1 = prompt('Digite um numero: ');
let num2 = prompt('Digite outro numero: ');

num1 = parseFloat(num1);
num2 = parseFloat(num2);

alert(`O valor do resultado é: ${num1 + num2}`);