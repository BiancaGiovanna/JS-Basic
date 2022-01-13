const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');

const resultado = document.getElementById('resultado');

numeroTitulo.innerHTML = numero;

resultado.innerHTML += `<p>Raiz quadrada ${Math.sqrt(numero)}</p>`
resultado.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}  </p>`
resultado.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`
resultado.innerHTML += `<p>Arredondado para Cima: ${Math.ceil(numero)}</p>`
resultado.innerHTML += `<p>Arredondado para Baixo: ${Math.floor(numero)}</p>`
resultado.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`