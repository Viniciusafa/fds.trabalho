const botao = document.getElementById('#botao');
  const container = document.getElementById('texto');

  botao.addEventListener('click', function() {
    const novoTexto = document.createElement('p');
    novoTexto.textContent = 'Olhe para dentro antes de tomar qualquer atitude';
    container.appendChild(novoTexto);
  });