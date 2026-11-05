// ===== Elementos da página =====
const campoBusca = document.querySelector("#busca");
const livros = document.querySelectorAll(".livro");
const formulario = document.querySelector("#form-sugestao");
const campoNome = document.querySelector("#nome");
const campoTitulo = document.querySelector("#titulo");
const mensagem = document.querySelector("#mensagem");

// ===== Filtro do catálogo (busca em tempo real) =====
campoBusca.addEventListener("input", function () {
  // Texto digitado, sem espaços nas pontas e em minúsculas
  const termo = campoBusca.value.trim().toLocaleLowerCase();

  livros.forEach(function (livro) {
    const titulo = livro
      .querySelector(".livro__titulo")
      .textContent.toLocaleLowerCase();

    // Esconde o livro se o título NÃO contém o que foi digitado
    livro.hidden = !titulo.includes(termo);
  });
});

// ===== Validação do formulário de sugestões =====
formulario.addEventListener("submit", function (evento) {
  // Impede o envio real do formulário
  evento.preventDefault();

  const nome = campoNome.value.trim();
  const titulo = campoTitulo.value.trim();

  // Limpa o estado da mensagem anterior
  mensagem.classList.remove("mensagem--erro", "mensagem--sucesso");

  if (titulo.length < 3) {
    mensagem.textContent = "O título do livro precisa ter pelo menos 3 caracteres.";
    mensagem.classList.add("mensagem--erro");
    campoTitulo.focus();
    return;
  }

  const quem = nome ? `Obrigado, ${nome}!` : "Obrigado!";
  mensagem.textContent = `${quem} Sua sugestão "${titulo}" foi registrada.`;
  mensagem.classList.add("mensagem--sucesso");

  formulario.reset();
});
