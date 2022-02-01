const pessoa1 = {
  nome: 'Bianca',
  sobrenome: 'Gomes',
  idade: 19,
};

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade
  }
}

const pessoa2 = criaPessoa('Bianca', 'Gomes', 19);

console.log(pessoa2);