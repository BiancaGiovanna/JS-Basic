function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado')

  const pessoas = [];

  function recebeEventoForm(e) {
    e.preventDefault();
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    })
    resultado.innerHTML += `Nome: ${nome.value} ${sobrenome.value}<br> 
    Peso: ${peso.value} Kg <br>
    Altura: ${altura.value} cm <br>`
  }

  form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();