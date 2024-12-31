// Seleciona todos os elementos que possuem a classe 'duvida' e os armazena em uma variável
var elementosDuvida = document.querySelectorAll('.duvida')

// Itera sobre cada elemento selecionado (cada elemento com a classe 'duvida')
elementosDuvida.forEach(function (duvida) {
  
  // Adiciona um evento de 'click' a cada elemento 'duvida'
  duvida.addEventListener('click', function () {
    // Quando o elemento é clicado, alterna a classe 'ativa'
    // Se a classe 'ativa' estiver presente, ela será removida; se não estiver, será adicionada
    duvida.classList.toggle('ativa')
  })
})