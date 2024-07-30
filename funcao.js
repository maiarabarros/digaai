document.getElementById('simButton').addEventListener('click', function() {
  setActiveButton(this);
  document.getElementById('resultado').textContent = 'Você selecionou: Sim';
  document.getElementById('erro').classList.add('hidden'); // Esconde a mensagem de erro
});

document.getElementById('naoButton').addEventListener('click', function() {
  setActiveButton(this);
  document.getElementById('resultado').textContent = 'Voto não computado';
  showError();
});

function setActiveButton(activeButton) {
  // Remove a classe ativa dos outros botões
  document.querySelectorAll('button').forEach(button => {
      button.classList.remove('button-active');
  });
  // Adiciona a classe ativa ao botão clicado
  activeButton.classList.add('button-active');
}

function showError() {
  // Adiciona a animação de flutuação ao botão "Não"
  const naoButton = document.getElementById('naoButton');
  naoButton.classList.add('floating');

  // Mostra a mensagem de erro
  const erroMessage = document.getElementById('erro');
  erroMessage.classList.remove('hidden');
  
  // Remove a animação após alguns segundos
  setTimeout(() => {
      naoButton.classList.remove('floating');
  }, 3000); // Duração da animação
}
