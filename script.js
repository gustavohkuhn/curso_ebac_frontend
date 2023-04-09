const formulario = document.getElementById('meuFormulario');
const mensagemValidacao = document.getElementById('mensagemValidacao');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  const campoA = parseInt(document.getElementById('campoA').value);
  const campoB = parseInt(document.getElementById('campoB').value);

  if (campoB > campoA) {
    mensagemValidacao.innerHTML = '<p class="mensagem-sucesso">Formulário válido!</p>';
  } else {
    mensagemValidacao.innerHTML = '<p class="mensagem-erro">Formulário inválido. O número B deve ser maior que o número A.</p>';
  }
});
