/**
 * Bianca Giovanna Gomes tem 19 anos, pesa 52kg
 * tem 1.69 de altura e seu IMC é de 18.21
 *Bianca Giovanna Gomes nasceu em 2001
*/

const nome = 'Bianca Giovanna Gomes';
const idade = 20;
const peso = 52;
const altura = 1.69;

const calcularImc = peso / (altura * altura)
const anoNascimento = 2021 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso}KG`);
console.log(`tem ${altura} de altura e seu IMC é de ${calcularImc.toFixed(2)}`)
console.log(`${nome} nasceu em ${anoNascimento}`)