const nome = prompt('Digite o seu nome:');
alert("Seja muito bem-vinde " + nome);
const confirmar = confirm('Tem certeza q quer aprender JS?');
console.log(confirmar);

if(confirmar) {
  alert("Ficou doidona?");
} else {
  alert('uffa essa ainda tem neurônios ')
}

let numero1 = prompt('Digite um numero:');
let numero2 = prompt('Digite outro numero:');

numero1 = Number(numero1);
numero2 = Number(numero2);

const resultado = numero1 + numero2

alert('a soma dos dois numeros é de: ' + resultado)